FROM node:18-alpine
WORKDIR /app

COPY *.json *.lock .babelrc ./
RUN npm i

COPY src ./src
COPY public ./public
COPY *.config* .

COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

CMD [ "sh", "-c", "./entrypoint.sh" ]
