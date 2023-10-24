import { createElement } from "react";
import { cn } from "@nextui-org/react";

interface Props {
  as: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className: string;
}

export function Box({ as = "div", children, className }: Partial<Props>) {
  return createElement(
    as,
    {
      className: cn(
        "p-5 rounded-large shadow-large bg-default-50 border-2 border-default-200",
        className,
      ),
    },
    children,
  );
}
