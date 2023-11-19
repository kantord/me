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
import shantellSans from "@fontsource-variable/shantell-sans/index.css";
import stylesCss from "styled-system/styles.css";
import PageWrapper from "./components/PageWrapper";
import { css } from "styled-system/css";


export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  { rel: 'stylesheet', href: shantellSans },
  { rel: 'stylesheet', href: stylesCss },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
]

const backgroundStyles = css({
  backgroundColor: "token(colors.decorativeBackground)",
  backgroundImage: "radial-gradient(token(colors.decorativeBackgroundDots) 0.8px, token(colors.decorativeBackground) 0.8px)",
  backgroundSize: "14px 14px",
});


export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={backgroundStyles}>
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
