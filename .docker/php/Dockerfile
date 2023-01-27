FROM php:8.1-fpm-alpine

ARG ENABLE_XDEBUG

RUN apk add --update \
    build-base \
    autoconf \
    make \
    curl \
    nodejs \
    yarn \
    zip \
    libzip-dev \
    coreutils \
    icu-dev

RUN apk --update --no-cache add php-ldap libldap php-ldap  openldap-clients openldap openldap-back-mdb
RUN apk add --update --virtual .build-deps autoconf g++ make zlib-dev curl-dev libidn2-dev libevent-dev icu-dev libidn-dev openldap libxml2-dev

RUN apk add --no-cache ldb-dev
RUN ln -s /usr/lib/x86_64-linux-gnu/libldap.so /usr/lib/libldap.so \
&& ln -s /usr/lib/x86_64-linux-gnu/liblber.so /usr/lib/liblber.so
RUN apk add --update --no-cache \
          libldap && \
      # Build dependancy for ldap \
      apk add --update --no-cache --virtual .docker-php-ldap-dependancies \
          openldap-dev && \
      docker-php-ext-configure ldap && \
      docker-php-ext-install ldap

RUN docker-php-ext-configure zip
RUN docker-php-ext-install zip mysqli pdo pdo_mysql intl

RUN apk add --update --no-cache --virtual .build-dependencies $PHPIZE_DEPS \
        && pecl install apcu \
        && docker-php-ext-enable apcu \
        && pecl clear-cache \
        && apk del .build-dependencies

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer && \
    ln -s $(composer config --global home) /root/composer
ENV PATH=$PATH:/root/composer/vendor/bin COMPOSER_ALLOW_SUPERUSER=1

ADD php.ini /usr/local/etc/php/conf.d/
ADD php.ini /usr/local/etc/php/cli/conf.d/
ADD php-fpm.conf /etc/php/php-fpm.d/

RUN if [ "${ENABLE_XDEBUG}" == "on" ]; then \
    yes | pecl install xdebug \
    && docker-php-ext-enable xdebug \
    && echo "xdebug.remote_enable=on" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_autostart=on" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_connect_back=1" >> /usr/local/etc/php/conf.d/xdebug.ini; \
    fi

WORKDIR /var/www/web

EXPOSE 9000

CMD ["php-fpm", "-F"]