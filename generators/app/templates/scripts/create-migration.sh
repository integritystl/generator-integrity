#!/bin/bash
set -e

# Define colors for terminal output
IPURPLE='\033[0;95m'
NC='\033[0m'

if [ -z "$1" ]
  then
    echo -e "$IPURPLE No migration name supplied. Use script from project root like `./scripts/create-migration.sh your-migration-name`$NC"
    exit 1
fi

# Get environment variables
if [ -f ./.env ]; then
    source ./.env
fi

# Create the migration - which is based on the current schema - but do not apply it
npx prisma migrate dev --name $1 --create-only

echo -e "$IPURPLE Migration created. Please rerun ./local-start.sh to apply it...$NC"

# Provide executing process a safe-exit code
exit 0
