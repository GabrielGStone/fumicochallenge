import { FC } from "react";
import { Container, Content } from "./styles";

interface LayoutProps {
  children: any;
  //todo tipar
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
