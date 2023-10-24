import { Button as NextButton, extendVariants } from "@nextui-org/react";

export const Button = extendVariants(NextButton, {
  defaultVariants: {
    variant: "solid",
    size: "md",
    type: "button",
    className: "font-semibold",
  },
});
