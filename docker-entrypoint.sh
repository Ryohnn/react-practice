#!/bin/sh
set -e

for f in /app/public/entrypoint.d/*.sh; do
    sh "$f"
done

exec "$@"