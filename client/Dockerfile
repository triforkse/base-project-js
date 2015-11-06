FROM python:2.7

ADD ./build /app
ADD ./scripts/docker-run.sh /app/run.sh

WORKDIR /app

EXPOSE 8080

CMD ["./run.sh"]
