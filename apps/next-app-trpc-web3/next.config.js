const withTM = require("next-transpile-modules")(["ui"]);
const { env } = require("./src/server/env");

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function getConfig(config) {
  return config;
}

module.exports = withTM(
  getConfig({
    reactStrictMode: true,
    swcMinify: false, // Required to fix: https://nextjs.org/docs/messages/failed-loading-swc
    /**
     * Dynamic configuration available for the browser and server.
     * Note: requires `ssr: true` or a `getInitialProps` in `_app.tsx`
     * @link https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
     */
    publicRuntimeConfig: {
      NODE_ENV: env.NODE_ENV,
    },
  })
);
