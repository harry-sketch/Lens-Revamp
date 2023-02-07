import React from "react";

// Assets
import BasicIcons from "@/Assets/BasicIcons";
import useLensStore from "@/clientStore";
import { TSidebarHandlesType } from "@/clientStore/clientTypes/group.client.type";

interface Props {
  activeUser: TSidebarHandlesType;
}

const ConvoMsg: React.FC<Props> = ({ activeUser }) => {
  const setIsConvoStarted = useLensStore((state) => state.setIsConvoStarted);

  return (
    <div className="flex items-center justify-center h-[92%] flex-col">
      <div>{BasicIcons.helloEmoji}</div>
      <div className="max-w-[200px] text-xl font-normal text-center text-custom-lens01 my-8">
        Start a conversation with
        <span className="font-bold">*{activeUser.name}*</span>
      </div>
      <button
        type="button"
        className="cursor-pointer bg-custom-lens01 w-60 border border-custom-lens04 rounded-lg py-2 text-custom-lens04 text-base font-semibold"
        onClick={() => setIsConvoStarted(true)}
      >
        Start Conversation
      </button>
    </div>
  );
};

export default React.memo(ConvoMsg);
