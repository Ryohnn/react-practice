FROM denoland/deno:debian AS deno-source

FROM dunglas/frankenphp AS base

WORKDIR /app/public

RUN apt-get update \
    && apt-get install -y \
        libpq-dev \
        libzip-dev \
        git \
    && docker-php-ext-install \
        pdo_pgsql \
        pgsql \
        pcntl \
        zip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
COPY --from=deno-source /usr/local/bin/deno /usr/local/bin/deno
COPY --chown=www-data . .

RUN chmod -R 775 /app/public/storage/logs \
    && chmod -R 775 /app/public/bootstrap/cache

ENTRYPOINT ["/app/public/docker-entrypoint.sh"]
CMD ["frankenphp", "run", "--config", "/etc/caddy/Caddyfile"]
