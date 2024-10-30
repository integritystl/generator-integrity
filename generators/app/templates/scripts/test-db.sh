#!/bin/bash
set -e

# Define colors for terminal output
ICYAN='\033[0;96m'
IGREEN='\033[0;92m'
NC='\033[0m'

# Use our local .env file if we are not in AWS Amplify, otherwise DATABASE_URL uses configured AWS 
# environment variables
if [ -f ./.env ] && [ -z "$AWS_APP_ID" ]; then
    source ./.env
fi

export DATABASE_URL=$TEST_DATABASE_URL

# Restart the test mysql server
function restartDatabase {
    # Bring down the test mysql server
    docker compose -f docker-compose.test.yml down --remove-orphans
    # Start the test mysql server
    docker compose -f docker-compose.test.yml up -d

    # Wait for MYSQL server (within container) to be ready by querying it
    while ! docker exec $TEST_MYSQL_CONTAINER_NAME mysql --user=$TEST_MYSQL_ROOT --password=$TEST_MYSQL_ROOT_PASSWORD -e "SELECT 1" &> /dev/null ; do
        echo -e "Waiting for $ICYAN${TEST_MYSQL_CONTAINER_NAME}$NC database connection..."
        sleep 3
    done

    # Delay before running Prisma commands because sometimes MYSQL server - even once queryable - takes extra time to be ready
    echo -e "$IGREEN \xE2\x9C\x94 Database connection established.$NC"
    sleep 2

    # Generate the Prisma Client
    # Run the migrations
    # Seed the database
    npx prisma generate
    npx prisma migrate deploy
    npx prisma db seed
    return 0
}

restartDatabase

# Safe exit
exit 0
