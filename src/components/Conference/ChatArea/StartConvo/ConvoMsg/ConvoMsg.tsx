// Assets
import BasicIcons from "@/Assets/BasicIcons";
import React from "react";
interface Props {
  onClick: () => void;
}

const ConvoMsg: React.FC<Props> = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) return onClick();
    return null;
  };

  return (
    <div className="flex items-center justify-center h-[92%] flex-col">
      <div>{BasicIcons.helloEmoji}</div>
      <div className="max-w-[200px] text-xl font-normal text-center text-custom-lens01 my-8">
        Start a conversation with *name*
      </div>
      <button
        type="button"
        className="cursor-pointer bg-custom-lens01 w-60 border border-custom-lens04 rounded-lg py-2 text-custom-lens04 text-base font-semibold"
        onClick={handleClick}
      >
        Start Conversation
      </button>
    </div>
  );
};

export default React.memo(ConvoMsg);
