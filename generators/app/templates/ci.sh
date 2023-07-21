#!/bin/bash
set -e

# This file duplicates the functionality of all-tests.sh but is intended to be run in a CI environment
# Would be better if we could consolidate in the future

# ======Run======
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
exit 0