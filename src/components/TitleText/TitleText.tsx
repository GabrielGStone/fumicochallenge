import { FC } from "react";
import { Text, Title } from "./styles";

interface TextProps {
  title: string;
  text: string;
}
const TitleText: FC<TextProps> = ({ title, text }) => {
  return (
    <>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </>
  );
};

export default TitleText;
