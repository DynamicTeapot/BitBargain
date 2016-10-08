#!/usr/bin/env bash

# Install NVM and Node.JS
sudo apt-get update
sudo apt-get install build-essential libssl-dev
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
nvm install node

# Install GIT
sudo apt-get install git

# Install Java 8 and then Elastic Search.
sudo add-apt-repository -y ppa:webupd8team/java
sudo apt-get update
sudo apt-get -y install oracle-java8-installer
wget https://download.elastic.co/elasticsearch/elasticsearch/elasticsearch-1.7.2.deb
sudo dpkg -i elasticsearch-1.7.2.deb
rm elasticsearch-1.7.2.deb

# Setup a basic directory structure.
mkdir dev && cd dev
mkdir rob mike joules drew
git clone https://github.com/DynamicTeapot/BitBargain prod

exit 0
