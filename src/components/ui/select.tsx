import React from "react";
import {
  Select as MaterialSelect,
  SelectProps,
  Option,
} from "@material-tailwind/react";
import { useController } from "react-hook-form";
import Typography from "./typography";
import { cn } from "@/lib/utils";

interface Props extends Omit<SelectProps, "children"> {
  name: string;
  control: any;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const Select = ({
  label,
  name,
  control,
  options,
  variant = "static",
  placeholder,
  className,
  ...props
}: Props) => {
  const { field, fieldState } = useController({ name, control });

  return (
    <div className={cn("flex flex-col gap-1 relative w-full", className)}>
      {!field.value && variant !== "outlined" && (
        <Typography className="text-sm absolute top-4 text-gray-500">
          {placeholder}
        </Typography>
      )}
      <MaterialSelect
        {...field}
        {...props}
        ref={null}
        variant={variant}
        label={label}
        placeholder={""}
        className="rounded-2xl border-dim-gray"
        labelProps={{
          className: "text-black",
        }}
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </MaterialSelect>
      {!!fieldState.error && (
        <Typography className="text-red-500 text-xs font-medium">
          {fieldState.error?.message}
        </Typography>
      )}
    </div>
  );
};

export default Select;
