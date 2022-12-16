import { FC } from "react";
import { Input, TextArea, TextContainer, TitleText } from "./styles";
import { Controller } from "react-hook-form";

interface TextInputProps {
  children: string;
  type?: string;
  placeholder?: string;
  isDiscription?: boolean;
  control: any;
  name: string;
  value?: string;
}
const TextInput: FC<TextInputProps> = ({
  children,
  type,
  placeholder,
  isDiscription,
  control,
  name,
  value,
}) => {
  return (
    <TextContainer>
      <TitleText>{children}</TitleText>

      <Controller
        name={name}
        control={control}
        render={({ field: { ...field } }) => (
          <>
            {isDiscription ? (
              <TextArea placeholder={placeholder} {...field} />
            ) : (
              <Input type={type} placeholder={placeholder} {...field} />
            )}
          </>
        )}
      />
    </TextContainer>
  );
};

export default TextInput;
