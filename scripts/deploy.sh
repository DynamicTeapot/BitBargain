#!/usr/bin/env bash


ssh aws "cd /home/ec2-user/BitBargain && git pull origin master"

exit $?

