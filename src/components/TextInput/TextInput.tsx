import { FC } from "react";
import { Input, TextContainer, TitleText } from "./styles";

interface TextInputProps {
  children: string;
  type?: string;
  placeholder: string;
}
const TextInput: FC<TextInputProps> = ({ children, type, placeholder }) => {
  return (
    <TextContainer>
      <TitleText>{children}</TitleText>
      <Input type={type} placeholder={placeholder} />
    </TextContainer>
  );
};

export default TextInput;
