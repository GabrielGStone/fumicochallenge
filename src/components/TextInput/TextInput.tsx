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
  inputRef?: any;
}

const TextInput: FC<TextInputProps> = ({
  children,
  type,
  placeholder,
  isDiscription,
  control,
  name,
  error,
  inputRef,
}) => {
  return (
    <TextContainer>
      <TitleText>{children}</TitleText>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            {isDiscription ? (
              <TextArea placeholder={placeholder} {...field} ref={inputRef} />
            ) : (
              <Input
                type={type}
                placeholder={placeholder}
                {...field}
                ref={inputRef}
              />
            )}
            {error && error.type === "required" && (
              <ErrorMessage text={error.message} />
            )}
            {error && error.type === "pattern" && (
              <ErrorMessage text={error.message} />
            )}
          </>
        )}
      />
    </TextContainer>
  );
};

export default TextInput;
