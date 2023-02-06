"use client";

import React, { ChangeEvent } from "react";

// Assets
import BasicIcons from "@/Assets/BasicIcons";

// Utils
import { cw } from "@/utils/helpers";

interface Props {
  icon?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  inputClass?: string;
}

const BasicInput: React.FC<Props> = ({
  icon,
  value,
  onChange,
  className,
  placeholder,
  inputClass,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
    return null;
  };

  return (
    <div
      className={cw(
        "bg-rgbColors-3 w-full flex items-center py-2.5 px-3.5 rounded-lg shadow-md backdrop-blur-md",
        className
      )}
    >
      {icon ? BasicIcons[icon] : null}
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        className={cw(
          "bg-transparent w-full focus:outline-none border-none placeholder:text-custom-lens03  text-sm font-normal",
          inputClass ? inputClass : "text-custom-lens03"
        )}
      />
    </div>
  );
};

export default React.memo(BasicInput);
