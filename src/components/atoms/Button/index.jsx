import React from "react";
import "./button.scss";

const STYLES = ["normal", "semi-rounded", "rounded", "rounded-nofill"];

const SIZES = ["medium", "large", "small"];

const COLOR = [
  "primary",
  "black",
  "yellow",
  "green",
  "light-blue-1",
  "light-blue-2",
  "white",
];

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
  disabled,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
