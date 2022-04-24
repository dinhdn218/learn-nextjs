/** @type {import('next').NextConfig} */

const { i18n } = require('./locales/i18.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
};

module.exports = nextConfig;
