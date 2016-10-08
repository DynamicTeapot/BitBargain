#!/usr/bin/env bash

# Add the needed external repositories and install the needed packages.
sudo add-apt-repository -y ppa:webupd8team/java
sudo apt-get update
sudo apt-get install build-essential libssl-dev postgresql postgresql-contrib git

# Install NVM and Node.JS
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
nvm install node

# Install Elastic Search.
wget https://download.elastic.co/elasticsearch/elasticsearch/elasticsearch-1.7.2.deb
sudo dpkg -i elasticsearch-1.7.2.deb && rm elasticsearch-1.7.2.deb

# Setup a basic directory structure.
mkdir dev && cd dev && mkdir rob mike joules drew
cd ~/
git clone https://github.com/DynamicTeapot/BitBargain prod

# Install Postgres
# This is actually done earlier, checkit 
# For documentation on setting up the server, refer to:
# https://help.ubuntu.com/community/PostgreSQL#Basic_Server_Setup


exit 0
