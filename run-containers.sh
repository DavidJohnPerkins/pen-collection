#!/bin/bash
stop_container() {
    NAME=$1
    echo "Stopping $NAME..."
    docker stop "$NAME" >/dev/null 2>&1 || echo "$NAME was not running"
    docker rm "$NAME" >/dev/null 2>&1 || echo "$NAME was not present"
}

run_container() {
    NAME=$1
    IMAGE=$2
    ARGS=$3
    echo $ARGS
    echo "Starting $NAME..."
    if docker run -d --name "$NAME" $ARGS "$IMAGE"; then
        echo "$NAME started."
    else
        echo "Failed to start $NAME."
        exit 1
    fi
}
stop_container "collection-api"
run_container "collection-api" "collection-api" "-e DATABASE_URL=sqlserver://sa:D04v03tD@sql1:1433?encrypt=disable&database=Collections&instance=sql1 -p 8085:8080 --rm --network grls"
# run_container "sql1" "mcr.microsoft.com/mssql/server:2022-latest" "-e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=D04v03tD' \
# --rm \
# --hostname volinst --name sql1 -p 1433:1433 \
# -v ~/sqlvolumes/data:/var/opt/mssql/data \
# -v ~/sqlvolumes/log:/var/opt/mssql/log \
# -v ~/sqlvolumes/secrets:/var/opt/mssql/secrets --network grls"
stop_container "collection-frontend"
run_container "collection-frontend" "collection-frontend" "-e MIDDLEWARE_URL=collection-api -e PORT=8080 -v /Users/davidperkins/public/collection-image:/app/images -p 4000:4000 --rm --network grls -d"

echo "All containers running."
