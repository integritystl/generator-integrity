#!/bin/bash
set -e

# Define colors for terminal output
IPURPLE='\033[0;95m'
NC='\033[0m'

# Use our local .env file if we are not in AWS Amplify, otherwise DATABASE_URL uses configured AWS 
# environment variables
if [ -f ./.env ] && [ -z "$AWS_APP_ID" ]; then
    source ./.env
fi

export DATABASE_URL=$TEST_DATABASE_URL

# Cleanup by bringing down the docker containers even if the script errors
function cleanup {
    echo -e "Bringing down docker containers"
    docker-compose -f docker-compose.test.yml down --remove-orphans
    exit 0
}
trap cleanup EXIT


# ======Preparing======
echo -e "$IPURPLE === Prepare ===$NC"
# Kill any running processes on port 3000
lsof -ti tcp:3000 | xargs kill
# Remove node_modules and reinstall
rm -rf ./node_modules
yarn install --frozen-lockfile


# ======Linting======
echo -e "$IPURPLE === Lint ===$NC"
yarn lint


# ======E2E Tests======
echo -e "$IPURPLE === Run End-to-end Tests ===$NC"
# Kill any running processes on port 3000
lsof -ti tcp:3000 | xargs kill
./scripts/test-db.sh

# Build the Next app
# Start the Next app (in production mode)
# Wait for the Next app to be ready on port 3000
# Run the e2e tests
yarn build
yarn start &
yarn wait-on-3000
yarn e2e-tests


# ====== Safe Exit======
echo -e "$IPURPLE === Completed all-tests script ===$NC"
exit 0
