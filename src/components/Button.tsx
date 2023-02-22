import React, { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary";
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, color = "primary", disabled = false, ...rest }) => {
  return (
    <button className={`btn btn-${color}`} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
