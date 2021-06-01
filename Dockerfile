FROM nginx:1.19-alpine
COPY vanilla /app
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
EXPOSE 80