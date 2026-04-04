#!/bin/sh

set -e

whoami
id -u
id -g

git config --global --add safe.directory /app/public

echo "Installing/updating Composer packages..."
composer install

echo "Installing/updating Node dependencies with Bun..."
bun install

echo "✅ Dependencies installed successfully"
