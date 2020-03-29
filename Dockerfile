## STAGE 0: nginx setup and configuration

FROM nginx:stable-alpine as base

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
RUN rm -rf /etc/nginx/conf.d

## Add unprivileged ilty user and group
RUN addgroup --system ilty && adduser --system --shell /sbin/nologin --home /var/cache/ilty  --ingroup ilty ilty 

## copy app
COPY nginx.conf /etc/nginx/nginx.conf
COPY build/ /usr/share/nginx/html
COPY ./env.sh /usr/share/nginx/html
COPY .env /usr/share/nginx/html/.env
RUN chmod +x  /usr/share/nginx/html/env.sh

## initialize pid and ownership 
RUN touch /var/run/nginx.pid && chown -R ilty:ilty /var/run/nginx.pid && chown -R ilty:ilty /var/cache/nginx && chown -R ilty:ilty /usr/share/nginx/html

## Create simlink for logging to stdout
RUN ln -sf /dev/stdout /var/log/nginx/access.log && ln -sf /dev/stdout /var/log/nginx/error.log

# Default port exposure
EXPOSE 80

# Add bash
RUN apk add --no-cache bash

USER ilty

WORKDIR /usr/share/nginx/html

# Start Nginx server
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx"]

#RUN ["/bin/sh", "/usr/share/nginx/html/env.sh"]
# Start Nginx server
#ENTRYPOINT ["nginx"]