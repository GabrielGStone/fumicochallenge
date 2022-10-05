import { stringify } from "querystring";
import { FC } from "react";
import { Button, ButtonContainer } from "./styles";

interface NavButtonsProps {
  leftText?: string;
  leftAction?: () => void;
  rightText: string;
  rightAction: () => void;
}

const NavButtons: FC<NavButtonsProps> = ({
  leftText,
  leftAction,
  rightText,
  rightAction,
}) => {
  return (
    <ButtonContainer>
      {leftText ? (
        <Button
          style={{
            backgroundColor: "#323232",
            color: "#F7F7F7",
            borderRight: "1px",
          }}
          onClick={leftAction}
        >
          {leftText}
        </Button>
      ) : (
        ""
      )}
      <Button onClick={rightAction}>{rightText}</Button>
    </ButtonContainer>
  );
};

export default NavButtons;
