#!/bin/sh

set -e

build(){
    npm run build
}

start(){
    npm run start
}

build
start