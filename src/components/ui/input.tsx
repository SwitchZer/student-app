import React, { useState } from "react";
import { Input as MaterialInput, InputProps } from "@material-tailwind/react";
import { useController } from "react-hook-form";
import { EyeIcon, EyeOff } from "lucide-react";
import Typography from "./typography";

interface Props extends InputProps {
  name: string;
  control: any;
  leftIcon?: React.ReactNode;
}

const Input = ({
  variant = "static",
  color = "black",
  name,
  control,
  type,
  leftIcon,
  ...props
}: Props) => {
  const { field, fieldState } = useController({ name, control });
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const icon =
    type === "password" ? (
      showPassword ? (
        <EyeIcon
          onClick={togglePasswordVisibility}
          width={20}
          height={20}
          color="#ADADADF0"
        />
      ) : (
        <EyeOff
          onClick={togglePasswordVisibility}
          width={20}
          height={20}
          color="#ADADADF0"
        />
      )
    ) : null;

  return (
    <div className="relative flex flex-col gap-1 w-full">
      <div className="!absolute left-1 top-[14px] rounded">{leftIcon}</div>
      <MaterialInput
        {...field}
        {...props}
        ref={null}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        variant={variant}
        color={color}
        error={!!fieldState.error}
        crossOrigin={""}
        icon={icon}
        className={leftIcon ? "pl-8" : ""}
      />
      {!!fieldState.error && (
        <Typography className="text-red-500 text-xs font-medium">
          {fieldState.error?.message}
        </Typography>
      )}
    </div>
  );
};

export default Input;
