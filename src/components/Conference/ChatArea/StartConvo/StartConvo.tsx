"use client";

import { useEffect, useState } from "react";

// Components
import Header from "./Header";
import ConvoMsg from "./ConvoMsg/ConvoMsg";
import FooterTxt from "@/components/common/FooterTxt";
import MsgInput from "./MsgInput/MsgInput";
import MsgField from "./MsgField/MsgField";

// Types
import { TConvoDataType } from "@/types/common.types";
import useLensStore from "@/clientStore";

const StartConvo = () => {
  const [convoData, setConvoData] = useState<TConvoDataType>({
    isConvoStarted: false,
    userMsg: "",
  });

  const sidebarHandlesArr = useLensStore((state) => state.sidebarHandlesArr);

  const handleId = useLensStore((state) => state.handleId);

  const [activeUser, setActiveUser] = useState(sidebarHandlesArr[0]);

  const { isConvoStarted, userMsg } = convoData;

  //   Funcs
  const handleClick = () =>
    setConvoData((prev) => ({ ...prev, isConvoStarted: true }));

  useEffect(() => {
    setActiveUser(sidebarHandlesArr[handleId]);
  }, [handleId, sidebarHandlesArr]);

  return (
    <div className="w-full h-full bg-[#fff]/80 relative">
      <Header activeUser={activeUser} />

      {/* <div className="h-[92%]">
        <MsgField />
        <MsgInput
          value={userMsg}
          onChange={(e) =>
            setConvoData((prev) => ({ ...prev, userMsg: e.target.value }))
          }
        />
      </div> */}

      <ConvoMsg onClick={handleClick} />

      <FooterTxt className="text-rgbColors-4 bottom-16" />
    </div>
  );
};

export default StartConvo;
