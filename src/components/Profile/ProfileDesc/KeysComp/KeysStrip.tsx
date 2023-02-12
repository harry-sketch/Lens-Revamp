import React from "react";

// Assets
import BasicIcons from "@/Assets/BasicIcons";

interface Props {
  title: string;
}

const KeysStrip: React.FC<Props> = ({ title }) => (
  <div className="flex items-start flex-col mb-4 last:mb-0">
    <div className="text-custom-lens01 text-sm font-medium">{title}</div>
    <div className="bg-custom-lens03 w-full flex items-center justify-between py-1 px-3.5 shadow-xl rounded-lg mt-1">
      <input
        type="text"
        className="bg-transparent w-full placeholder:text-custom-lens01 text-base font-normal"
        placeholder="*public key*"
      />
      <div className="cursor-pointer">{BasicIcons.keysCopy}</div>
    </div>
  </div>
);

export default React.memo(KeysStrip);
