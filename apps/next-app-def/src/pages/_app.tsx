import type { AppProps } from "next/app";
import PlausibleProvider from "next-plausible";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";

function getBaseUrl() {
  // reference for vercel.com
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <PlausibleProvider domain={getBaseUrl()}>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  </PlausibleProvider>
);

export default App;
