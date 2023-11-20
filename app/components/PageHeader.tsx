import { stack } from "styled-system/patterns";
import { css } from "styled-system/css";
import type { ReactNode } from "react";


const PageTitle = ({ children }: { children: ReactNode }) => {
  return <h1 className={css({ textStyle: "heading1" })}>{children}</h1>;
};



export default function PageHeader() {
  return <header data-testid="main-header" className={stack({ align: "center" })}>
    <PageTitle>
      Dániel Kántor
    </PageTitle>
  </header >;
}
