docker build --no-cache -f SQL\Dockerfile.PostgreSql -t ol/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t ol/app ../..
