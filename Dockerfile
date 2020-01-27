# Stage 1: Build
FROM node:13-alpine as build

# Create app directory
RUN mkdir -p /app
COPY . /app

# Install and build
WORKDIR /app
RUN yarn install --silent && yarn build

# Stage 2: Host
FROM nginx:1.17-alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
