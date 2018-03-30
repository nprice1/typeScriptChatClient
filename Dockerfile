FROM nginx

COPY index.html /usr/share/nginx/html/
COPY build/* /usr/share/nginx/html/build/
