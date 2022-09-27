import { FC } from "react";
import { Container } from "./styles";

interface LayoutProps {
  children: any;
  //todo tipar
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
