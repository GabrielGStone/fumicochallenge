import { FC } from "react";
import { Container } from "./styles";

interface ScreenProps {
  children: any;
}
const ScreenContainer: FC<ScreenProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ScreenContainer;
