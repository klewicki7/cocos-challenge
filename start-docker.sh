#!/bin/bash

set -e

echo "Levantando servicios de Docker (modo verboso, en background)..."
docker-compose up -d --build --force-recreate --remove-orphans

echo "\nEstado de los contenedores:"
docker ps --filter name=cocos_postgres

echo "\nChequeando conexión y datos de la base de datos..."
npm run db:check 