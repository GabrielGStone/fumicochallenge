import { FC } from "react";
import { ErrorWrap, Text } from "./styles";

interface Props {
  children?: any;
}

const ErrorMessage: FC<Props> = ({ children }) => {
  return (
    <ErrorWrap>
      <Text>{children}</Text>
    </ErrorWrap>
  );
};

export default ErrorMessage;
