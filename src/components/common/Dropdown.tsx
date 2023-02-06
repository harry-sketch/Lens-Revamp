import React from "react";

// UI
import { cw } from "@/utils/helpers";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface Props {
  trigger: JSX.Element;
  open?: boolean;
  onOpenChange?: () => void;
  children: JSX.Element;
  sideOffset?: number;
  align?: "center" | "start" | "end";
  className?: string;
}

const Dropdown: React.FC<Props> = ({
  children,
  onOpenChange,
  open,
  trigger,
  sideOffset,
  align,
  className,
}) => (
  <DropdownMenu.Root open={open} onOpenChange={onOpenChange}>
    <DropdownMenu.Trigger>{trigger}</DropdownMenu.Trigger>

    <DropdownMenu.Content
      className={cw(
        "backdrop-blur-md shadow-md rounded-lg border border-custom-lens05 bg-rgbColors-4/60 w-full z-0",
        className
      )}
      sideOffset={sideOffset}
      align={align}
    >
      <DropdownMenu.Item>{children}</DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
);

export default React.memo(Dropdown);