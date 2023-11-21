import { stack } from "styled-system/patterns";
import { css } from "styled-system/css";
import type { ReactNode } from "react";

const PageTitle = ({ children }: { children: ReactNode }) => {
  return <h1 className={css({ textStyle: "heading1" })}>{children}</h1>;
};

const Subtitle = ({ children }: { children: ReactNode }) => {
  return (
    <p className={css({ textStyle: "body" })}>
      <span className={stack({ align: "center" })}>{children}</span>
    </p>
  );
};

export default function PageHeader() {
  return (
    <header data-testid="main-header" className={stack({ align: "center" })}>
      <PageTitle>
        Dániel Kántor
        <Subtitle>Full Stack Developer</Subtitle>
      </PageTitle>
    </header>
  );
}
