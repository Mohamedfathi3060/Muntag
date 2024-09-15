# Use the official PHP image with Apache and PHP 8.2
FROM php:8.2-apache

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    curl \
    unzip \
    git \
    && docker-php-ext-install pdo mbstring exif pcntl bcmath gd

# Install Composer globally
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy existing application directory contents
COPY . /var/www/html


# Ensure the Apache server points to the public folder of Laravel
RUN sed -i 's#/var/www/html#/var/www/html/public#' /etc/apache2/sites-available/000-default.conf


# Set file permissions for Laravel folders
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Enable Apache mod_rewrite for Laravel routes
RUN a2enmod rewrite

# Install Composer dependencies
RUN composer install --optimize-autoloader --no-dev


# Expose port 80 to the web
EXPOSE 80

# Run Apache in the foreground
CMD ["apache2-foreground"]
