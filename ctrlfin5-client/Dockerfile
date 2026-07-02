# Build the legacy Angular 6 application with a Node version compatible with node-sass 4.x.
FROM node:10.24.1-buster AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
ARG BASE_HREF=/admin/
RUN npm run build -- --prod --base-href=${BASE_HREF}

# Serve the compiled static files with nginx.
FROM nginx:1.25-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/ctrlfin5-client /usr/share/nginx/html/admin

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
