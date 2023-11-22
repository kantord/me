import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./index.css";
import { cssBundleHref } from "@remix-run/css-bundle";
import shantellSans from "@fontsource-variable/shantell-sans/index.css";
import stylesCss from "styled-system/styles.css";
import PageWrapper from "./components/PageWrapper";
import { css } from "styled-system/css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: shantellSans },
  { rel: "stylesheet", href: stylesCss },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

// source https://heropatterns.com/
const backgroundStyles = css({
  backgroundColor: "#ffffff",
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239abf88' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\")",
  backgroundSize: "6px 6px",
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
    </html>
  );
}
