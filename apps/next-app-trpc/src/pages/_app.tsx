import type { AppProps } from "next/app";
import PlausibleProvider from "next-plausible";
import { SessionProvider } from "next-auth/react";
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { loggerLink } from "@trpc/client/links/loggerLink";
import { withTRPC } from "@trpc/next";
import superjson from "superjson";

import { AppRouter } from "@/server/routers/_app";
import { SSRContext } from "@/utils/trpc";

import "@/styles/globals.css";

function getBaseUrl() {
  // reference for vercel.com
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

function getTRPCUrl() {
  if (typeof window !== "undefined") {
    return "";
  }

  return getBaseUrl();
}

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <PlausibleProvider domain={getBaseUrl()}>
    {/* <SessionProvider session={session}> */}
      <Component {...pageProps} />
    {/* </SessionProvider> */}
  </PlausibleProvider>
);

const AppWithTRPC = withTRPC<AppRouter>({
  config() {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    return {
      /**
       * @link https://trpc.io/docs/links
       */
      links: [
        // adds pretty logs to your console in development and logs errors in production
        loggerLink({
          enabled: (opts: any) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getTRPCUrl()}/api/trpc`,
        }),
      ],
      /**
       * @link https://trpc.io/docs/data-transformers
       */
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
  /**
   * Set headers or status code when doing SSR
   */
  responseMeta(opts: any) {
    const ctx = opts.ctx as SSRContext;

    if (ctx.status) {
      // If HTTP status set, propagate that
      return {
        status: ctx.status,
      };
    }

    const error = opts.clientErrors[0];
    if (error) {
      // Propagate http first error from API calls
      return {
        status: error.data?.httpStatus ?? 500,
      };
    }
    // For app caching with SSR see https://trpc.io/docs/caching
    return {};
  },
})(App);

export default AppWithTRPC;
