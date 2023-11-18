docker build --no-cache -f SQL\Dockerfile.PostgreSql -t ol-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t ol-java/app ../../..
