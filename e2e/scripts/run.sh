#!/bin/bash

printenv

if [ "$CLIENT_ADDR" = "" ]
then
   CLIENT_ADDR=$APP_CLIENT_1_PORT_8080_TCP_ADDR
fi

npm test
