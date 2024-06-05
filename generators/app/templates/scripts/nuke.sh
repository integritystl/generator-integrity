#!/bin/bash
###########################################
#
# Simple Shell script to clean/remove all container/images and volumes
# This WILL remove volumes from ANY docker project on your machine
#
# The script will do the following:
#  - stop all running containers (if any),
#  - remove containers, images, networks, and volumes
#
set -e

# Define colors for terminal output
IPURPLE='\033[0;95m'
NC='\033[0m'

read -p "Are you sure you want to stop and remove all Docker containers, images, volumes, and networks from your machine (y/n)?" answer
case ${answer:0:1} in
    y|Y|yes|Yes|YES )
        # stop all running containers
        echo -e "$IPURPLE Stop any containers...$NC"
        docker ps -aq | xargs -r docker stop

        # Remove all containers, images, and networks
        echo -e "$IPURPLE Deleting all stopped containers, images, networks, and volumes ..$NC"
        docker system prune --all -f

        # Remove all unused local volumes
        echo -e "$IPURPLE Deleting all unused local volumes used by at least one container ..$NC"
        docker volume prune --filter all=1 -f

        echo -e "$IPURPLE All clean!$NC"

        # Safe exit
        exit 0
    ;;
    * )
        echo No, exiting...
        exit 0
    ;;
esac
