"use client";

import React, { ChangeEvent } from "react";

// Assets
import BasicIcons from "@/Assets/BasicIcons";

interface Props {
  icon?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const BasicInput: React.FC<Props> = ({ icon, value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
    return null;
  };

  return (
    <div className="bg-rgbColors-3 w-full flex items-center py-2.5 px-3.5 rounded-lg shadow-md backdrop-blur-md ">
      {icon ? BasicIcons[icon] : null}
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e)}
        className="bg-transparent w-full focus:outline-none border-none placeholder:text-custom-lens03 text-custom-lens03 text-sm font-normal"
      />
    </div>
  );
};

export default React.memo(BasicInput);
