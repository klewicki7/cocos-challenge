#!/bin/bash

set -e

echo "Levantando servicios de Docker (modo verboso, en background)..."
docker-compose up -d --build --force-recreate --remove-orphans

echo "\nEstado de los contenedores:"
docker ps --filter name=cocos_postgres

