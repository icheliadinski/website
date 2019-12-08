FROM nginx:alpine

WORKDIR /app

RUN apk add --update-cache yarn

COPY . .
RUN yarn install --silent
RUN yarn run build
RUN ln -s build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]