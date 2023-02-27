import { FC } from "react";
import { Input, TextArea, TextContainer, TitleText } from "./styles";
import { Controller, FieldError } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";

interface TextInputProps {
  children: string;
  type?: string;
  placeholder?: string;
  isDiscription?: boolean;
  control: any;
  name: string;
  error?: FieldError;
}
const TextInput: FC<TextInputProps> = ({
  children,
  type,
  placeholder,
  isDiscription,
  control,
  name,
  error,
}) => {
  console.log("component text", error);

  return (
    <TextContainer>
      <TitleText>{children}</TitleText>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            {isDiscription ? (
              <TextArea placeholder={placeholder} {...field} />
            ) : (
              <Input type={type} placeholder={placeholder} {...field} />
            )}
            {error && <ErrorMessage text={error.message} />}
          </>
        )}
      />
    </TextContainer>
  );
};

export default TextInput;
