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
    userMsg: "",
  });

  const sidebarHandlesArr = useLensStore((state) => state.sidebarHandlesArr);

  const handleId = useLensStore((state) => state.handleId);

  const [activeUser, setActiveUser] = useState(sidebarHandlesArr[0]);

  const { userMsg } = convoData;

  const isConvoStarted = useLensStore((state) => state.peer.isConvoStarted);

  useEffect(() => {
    setActiveUser(sidebarHandlesArr[handleId]);
  }, [handleId]);

  return (
    <div className="w-full h-full bg-[#fff]/80 relative">
      <Header activeUser={activeUser} />

      {isConvoStarted ? (
        <div className="h-[92%]">
          <MsgField />
          <MsgInput
            value={userMsg}
            onChange={(e) =>
              setConvoData((prev) => ({ ...prev, userMsg: e.target.value }))
            }
          />
        </div>
      ) : (
        <ConvoMsg activeUser={activeUser} />
      )}

      <FooterTxt className="text-rgbColors-4 bottom-16" />
    </div>
  );
};

export default StartConvo;
