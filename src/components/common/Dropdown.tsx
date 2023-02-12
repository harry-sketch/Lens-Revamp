import React from "react";

// UI
import { cw } from "@/utils/helpers";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface Props {
  open?: boolean;
  onOpenChange?: () => void;
  children: React.ReactNode;
  sideOffset?: number;
  align?: "center" | "start" | "end";
  className?: string;
}

const Dropdown: React.FC<Props> = ({
  children,
  onOpenChange,
  open,
  sideOffset,
  align,
  className,
}) => (
  <DropdownMenu.Root open={open} onOpenChange={onOpenChange}>
    <DropdownMenu.Trigger asChild>
      {React.Children.toArray(children)[0]}
    </DropdownMenu.Trigger>

    <DropdownMenu.Content
      className={cw(
        "backdrop-blur-md shadow-md rounded-lg border border-custom-lens05 bg-rgbColors-4/60 w-full z-10",
        className
      )}
      sideOffset={sideOffset}
      align={align}
    >
      <DropdownMenu.Item>
        {React.Children.toArray(children)[1]}
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
);

export default React.memo(Dropdown);
