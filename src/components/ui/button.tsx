import React from "react";
import {
  Button as MaterialButton,
  ButtonProps,
} from "@material-tailwind/react";

interface Props extends ButtonProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  outline?: boolean;
}

const Button = ({
  children,
  size = "lg",
  outline = false,
  ...props
}: Props) => {
  const { ref, ...rest } = props;

  const sizeClasses = {
    sm: "py-2 px-4 text-xs",
    md: "py-3 px-5 text-sm",
    lg: "py-[17px] px-6 text-base",
  };

  const outlineClass = outline
    ? "bg-white border border-black text-black"
    : "text-white";

  return (
    <MaterialButton
      placeholder={""}
      {...rest}
      className={`min-w-[128px] justify-center rounded-full ${sizeClasses[size]} ${outlineClass} normal-case text-sm font-medium flex items-center gap-2`}
    >
      {children}
    </MaterialButton>
  );
};

export default Button;
