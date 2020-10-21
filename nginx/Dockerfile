FROM nginx:alpine

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Copy config file
COPY ./default.conf /etc/nginx/conf.d/

EXPOSE 80

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]