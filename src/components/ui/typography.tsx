import React from "react";
import {
  Typography as MaterialTypography,
  TypographyProps,
} from "@material-tailwind/react";

interface Props extends TypographyProps {}

const Typography = ({ children, ref, color = "black", ...props }: Props) => {
  return (
    <MaterialTypography placeholder={""} color={color} {...props}>
      {children}
    </MaterialTypography>
  );
};

export default Typography;
