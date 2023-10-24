import { Select as NextSelect, SelectItem, SelectProps, extendVariants } from "@nextui-org/react";
import { Control, Controller, Path } from "react-hook-form";

interface Props<T extends object>
  extends Omit<SelectProps, "children" | "disabledKeys" | "selectedKeys" | "renderValue"> {
  value: string;
  name?: Path<T>;
  options: Option[];
  control?: Control<T>;
}

export function Select<T extends object>({ control, options, value, name, ...props }: Props<T>) {
  if (control && name) {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field: { value, ...field } }) => (
          <MySelect {...props} {...field} disabledKeys={[value]} selectedKeys={[value]}>
            {options.map((option) => (
              <SelectItem key={option.key} textValue={option.key}>
                {option.label}
              </SelectItem>
            ))}
          </MySelect>
        )}
      />
    );
  }

  return (
    <MySelect {...props} selectedKeys={[value]} disabledKeys={[value]}>
      {options.map((option) => (
        <SelectItem key={option.key} textValue={option.key}>
          {option.label}
        </SelectItem>
      ))}
    </MySelect>
  );
}

const MySelect = extendVariants(NextSelect, {
  defaultVariants: {
    variant: "faded",
    labelPlacement: "outside",
    size: "md",
    selectionMode: "single",
  },
  slots: {
    label: "capitalize",
  },
});
