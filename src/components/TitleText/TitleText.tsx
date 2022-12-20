import { FC } from "react";
import { Box, Text, Title } from "./styles";

interface TextProps {
  title: string;
  text: string;
}
const TitleText: FC<TextProps> = ({ title, text }) => {
  return (
    <>
      <Box>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Box>
    </>
  );
};

export default TitleText;
