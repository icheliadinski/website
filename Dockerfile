FROM nginx:alpine

WORKDIR /app

RUN apk add --update-cache yarn

COPY . .
RUN yarn install --silent
RUN yarn run build

CMD ["nginx", "-g", "daemon off;"]