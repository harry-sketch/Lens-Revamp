"use client";

import React from "react";

// Next fonts
import { Spline_Sans } from "@next/font/google";

// Assets
import LandingPageIcons from "@/Assets/LandingPageIcons";
import { cw } from "@/utils/helpers";

interface Props {
  text: string;
  className?: string;
  variant: "primary" | "secondary" | "custom";
  disabled?: boolean;
  onClick: () => void;
  isIcon?: boolean;
  type?: string;
}

const BasicBtn: React.FC<Props> = ({
  text,
  variant,
  className,
  disabled,
  onClick,
  isIcon,
  type,
}) => {
  const handleClick = () => {
    if (onClick) onClick();
    return null;
  };

  const variants = {
    primary: "bg-btn-primary border-transparent text-custom-lens01",
    secondary: "bg-transparent border border-btn-primary text-btn-primary",
    custom: className,
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleClick}
      className={cw(
        variants[variant],
        "rounded-lg py-2 cursor-pointer w-full text-base flex items-center justify-center gap-2  font-semibold"
      )}
    >
      {text}
      {isIcon ? <span>{LandingPageIcons[type ? type : ""]}</span> : null}
    </button>
  );
};

export default React.memo(BasicBtn);
