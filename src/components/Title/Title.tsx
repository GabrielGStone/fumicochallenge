import { FC } from "react";
import { TitleText } from "./styles";

interface TitleProps {
  children: any;
  //todo tipar
}
const Title: FC<TitleProps> = ({ children }) => {
  return <TitleText>{children}</TitleText>;
};

export default Title;
