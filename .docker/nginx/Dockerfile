FROM nginx

ADD nginx.conf /etc/nginx/
ADD web.conf /etc/nginx/conf.d/default.conf
RUN echo "upstream php-upstream { server php:9000; }" > /etc/nginx/conf.d/upstream.conf

EXPOSE 80

CMD ["nginx"]