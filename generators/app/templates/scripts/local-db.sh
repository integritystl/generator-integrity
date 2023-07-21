#!/bin/bash
set -e

# Define colors for terminal output
ICYAN='\033[0;96m'
IGREEN='\033[0;92m'
NC='\033[0m'

if [ -f ./.env ]; then
    source ./.env
fi
export DATABASE_URL=$LOCAL_DATABASE_URL

# Restart the mysql server
function restartDatabase {
    # Bring down existing MYSQL container
    docker-compose down --remove-orphans
    # Start MYSQL container
    docker-compose up -d

    # Wait for MYSQL server (within container) to be ready by querying it
    while ! docker exec $LOCAL_MYSQL_CONTAINER_NAME mysql --user=$LOCAL_MYSQL_ROOT --password=$LOCAL_MYSQL_ROOT_PASSWORD -e "SELECT 1" &> /dev/null ; do
        echo -e "Waiting for $ICYAN${LOCAL_MYSQL_CONTAINER_NAME}$NC database connection..."
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
exit 0
