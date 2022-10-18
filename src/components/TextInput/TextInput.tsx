import { FC } from "react";
import { Input, TextArea, TextContainer, TitleText } from "./styles";

interface TextInputProps {
  children: string;
  type?: string;
  placeholder: string;
  isDiscription?: boolean;
}
const TextInput: FC<TextInputProps> = ({
  children,
  type,
  placeholder,
  isDiscription,
}) => {
  return (
    <TextContainer>
      <TitleText>{children}</TitleText>
      {isDiscription ? (
        <TextArea placeholder={placeholder} />
      ) : (
        <Input type={type} placeholder={placeholder} />
      )}
    </TextContainer>
  );
};

export default TextInput;
