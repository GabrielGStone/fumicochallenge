import { FC } from "react";
import { Input, TextArea, TextContainer, TitleText } from "./styles";
import { Controller } from "react-hook-form";
import ErrorMessage from "../ErrorMessage";

interface TextInputProps {
  children: string;
  type?: string;
  placeholder?: string;
  isDiscription?: boolean;
  control: any;
  name: string;
  error?: any;
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
  console.log(error);

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
      {error && <ErrorMessage text={error.message} />}
    </TextContainer>
  );
};

export default TextInput;
