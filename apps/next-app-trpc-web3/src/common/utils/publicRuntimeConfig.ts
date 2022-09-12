/**
 * Dynamic configuration available for the browser and server populated from your `next.config.js`.
 * Note: requires `ssr: true` or a `getInitialProps` in `_app.tsx`
 * @link https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
 */
import getConfig from "next/config";

import * as config from "../../../next.config";

type NextConfigType = {
  reactStrictMode: boolean;
  swcMinify: boolean;
  publicRuntimeConfig: {
    NODE_ENV: string;
  };
  experimental: {
    legacyBrowsers: boolean;
    browsersListForSwc: boolean;
    images: { allowFutureImage: boolean };
  };
};

const currentConfig = config as NextConfigType;

/**
 * Inferred type from `publicRuntime` in `next.config.js`
 */
type PublicRuntimeConfig = typeof currentConfig.publicRuntimeConfig;

const nextConfig = getConfig();

export const publicRuntimeConfig =
  nextConfig.publicRuntimeConfig as PublicRuntimeConfig;
