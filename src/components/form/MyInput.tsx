import { Input, extendVariants } from "@nextui-org/react";

export const MyInput = extendVariants(Input, {
  defaultVariants: {
    variant: "faded",
    size: "md",
    labelPlacement: "outside",
    placeholder: " ",
  },
  slots: {
    label: "capitalize",
  },
});
