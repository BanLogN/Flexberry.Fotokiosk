docker build --no-cache -f SQL\Dockerfile.PostgreSql -t fotokiosk/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t fotokiosk/app ../..
