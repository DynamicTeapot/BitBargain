#!/usr/bin/env bash


# Setup the swapfile.
sudo dd if=/dev/zero of=/swapfile bs=1M count=1500 # Make a swapfile /swapfile of 1.5 Gbytes
sudo chmod 0600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
sudo echo '/swapfile    none    swap    sw    0   0' >> /etc/fstab # Add the swapfile to fstab

# Add the needed external repositories and install the needed packages.
sudo add-apt-repository -y ppa:webupd8team/java # Add the Oracle JDK
sudo apt-get update
sudo apt-get -y upgrade
sudo apt-get -y install build-essential libssl-dev git node-gyp oracle-java8-installer

# Install NVM and Node.JS
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
nvm install node

# Install Elastic Search.
wget https://download.elastic.co/elasticsearch/elasticsearch/elasticsearch-1.7.2.deb
sudo dpkg -i elasticsearch-1.7.2.deb && rm elasticsearch-1.7.2.deb
sudo update-rc.d elasticsearch defaults 95 10 # Start elastic search on system start.
sudo /etc/init.d/elasticsearch start # Start elastic search up.

# Setup a basic directory structure.
mkdir dev && cd dev && mkdir rob mike joules drew
cd ~/
git clone https://github.com/DynamicTeapot/BitBargain prod

# Install Postgres
# This is actually done earlier, checkit 
# For documentation on setting up the server, refer to:
# https://help.ubuntu.com/community/PostgreSQL#Basic_Server_Setup


exit 0
