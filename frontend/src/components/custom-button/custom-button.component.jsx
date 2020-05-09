import React from "react";

import {
  StyledButton,
  LogoContainer,
  ButtonContainer,
  Text,
} from "./custom-button.styles";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import { ReactComponent as TrashIcon } from "../../assets/trash.svg";

const CustomButton = ({ text, ...props }) => {
  const getIcon = (icon) => {
    if (icon === "danger") {
      return <TrashIcon />;
    }
    if (icon === "primary") {
      return <TrashIcon />;
    }
  };
  return (
    <StyledButton {...props}>
      <ButtonContainer>
        <LogoContainer>{getIcon(props.type)}</LogoContainer>
        <Text>{text}</Text>
      </ButtonContainer>
    </StyledButton>
  );
};

export default CustomButton;
