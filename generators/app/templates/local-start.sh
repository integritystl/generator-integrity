#!/bin/bash
set -e

# =======Prepare=======
# Kill any running processes on port 3000
lsof -ti tcp:3000 | xargs kill

# Remove node_modules and reinstall
rm -rf ./node_modules
yarn install --frozen-lockfile

# ======Run======
./scripts/local-db.sh
yarn dev
