import type { ReactNode } from "react";
import { container } from "styled-system/patterns";

type Props = {
  children: ReactNode;
};

export default function PageWrapper({ children }: Props) {
  return <div className={container({})}>{children}</div>;
}
