import React from "react";
import "./Button.scss";
const Button = ({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick?: () => null;
  children?: React.ReactNode;
}) => {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={label}
      onClick={onClick}
      className="button-default"
    >
      {children}
    </div>
  );
};

export default Button;
