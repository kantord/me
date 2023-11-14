import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from './index.css'
import { cssBundleHref } from "@remix-run/css-bundle";
import fontStyles from "@fontsource-variable/shantell-sans/index.css";
import stylesCss from "styled-system/styles.css";
import PageWrapper from "./components/PageWrapper";


export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  { rel: 'stylesheet', href: fontStyles },
  { rel: 'stylesheet', href: stylesCss },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
]


export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <PageWrapper>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </PageWrapper>
      </body>
    </html >
  );
}
