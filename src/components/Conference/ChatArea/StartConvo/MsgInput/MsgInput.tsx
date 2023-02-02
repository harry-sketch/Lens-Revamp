import React from "react";

// Assets
import BasicIcons from "@/Assets/BasicIcons";

// Types
import { THandleChangeType } from "@/types/common.types";

interface Props {
  value: string;
  onChange: (e: THandleChangeType) => void;
}

const MsgInput: React.FC<Props> = ({ value, onChange }) => (
  <div className="h-[12%] bg-rgbColors-6 w-full py-4 px-6">
    <form className="flex items-center w-full gap-3">
      <input
        value={value}
        onChange={(e) => onChange(e)}
        type="text"
        placeholder="Type your message..."
        className="bg-custom-lens03 w-full rounded-lg shadow-lg py-2.5 px-3.5 text-custom-lens05 placeholder:text-custom-lens05 text-base font-normal focus:outline-none border-none"
      />
      <div className="flex items-center gap-3">
        <button type="submit">{BasicIcons.sendMsg}</button>
      </div>
    </form>
  </div>
);

export default React.memo(MsgInput);
