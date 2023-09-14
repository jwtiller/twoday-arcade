# Use a lightweight Nginx image as the base image
FROM nginx:latest

# Remove the default Nginx configuration file
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy your custom Nginx configuration file
COPY webserver.conf /etc/nginx/conf.d/

# Copy your static webpage files into the Nginx document root
COPY ./index.html /usr/share/nginx/html/
COPY ./style.css /usr/share/nginx/html/
COPY ./script.js /usr/share/nginx/html/
COPY ./images /usr/share/nginx/html/images

# Expose port 80 for HTTP
EXPOSE 80

# Start the Nginx server in the foreground
CMD ["nginx", "-g", "daemon off;"]
