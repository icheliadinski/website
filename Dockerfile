FROM nginx:alpine

WORKDIR /app

RUN apk add --update-cache yarn

COPY . .
RUN yarn install --silent
RUN yarn run build

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
