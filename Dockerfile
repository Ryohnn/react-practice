FROM oven/bun:debian AS bun-source

FROM dunglas/frankenphp AS base

WORKDIR /app/public

RUN apt-get update && apt-get install -y \
    libpq-dev \
    && docker-php-ext-install \
    pdo_pgsql \
    pgsql \
    pcntl \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
COPY --from=bun-source /usr/local/bin/bun /usr/local/bin/bun
COPY --from=bun-source /usr/local/bin/bunx /usr/local/bin/bunx
COPY --chown=www-data . .

RUN chmod -R 775 /app/public/storage/logs \
    && chmod -R 775 /app/public/bootstrap/cache

ENTRYPOINT ["/app/public/docker-entrypoint.sh"]
CMD ["frankenphp", "run", "--config", "/etc/caddy/Caddyfile"]
