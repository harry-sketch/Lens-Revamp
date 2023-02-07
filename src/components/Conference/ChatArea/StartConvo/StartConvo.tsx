"use client";

import React, { useEffect, useState } from "react";

// Components
import Header from "./Header";
import ConvoMsg from "./ConvoMsg/ConvoMsg";
import FooterTxt from "@/components/common/FooterTxt";
import MsgInput from "./MsgInput/MsgInput";
import MsgField from "./MsgField/MsgField";

// Types
import { TConvoDataType } from "@/types/common.types";
import useLensStore from "@/clientStore";
import { TSidebarHandlesType } from "@/clientStore/clientTypes/group.client.type";

const StartConvo = () => {
  const [convoData, setConvoData] = useState<TConvoDataType>({
    userMsg: "",
  });

  const sidebarHandlesArr = useLensStore((state) => state.sidebarHandlesArr);

  const isConvoStarted = useLensStore((state) => state.peer.isConvoStarted);

  const handleId = useLensStore((state) => state.handleId);

  const [activeUser, setActiveUser] = useState<TSidebarHandlesType>(
    sidebarHandlesArr[0]
  );

  const { userMsg } = convoData;

  useEffect(() => {
    setActiveUser(sidebarHandlesArr[handleId]);
  }, [handleId]);

  return (
    <div className="w-full h-full bg-[#fff]/80 relative">
      <Header activeUser={activeUser} />

      {isConvoStarted || activeUser.msg.length > 0 ? (
        <div className="h-[92%]">
          <MsgField activeUser={activeUser} />
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

export default React.memo(StartConvo);
