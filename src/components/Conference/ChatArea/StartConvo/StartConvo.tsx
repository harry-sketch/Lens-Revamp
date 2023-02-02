"use client";

import { useState } from "react";

// Components
import Header from "./Header";
import ConvoMsg from "./ConvoMsg/ConvoMsg";
import FooterTxt from "@/components/common/FooterTxt";
import MsgInput from "./MsgInput/MsgInput";
import MsgField from "./MsgField/MsgField";

// Types
import { TConvoDataType } from "@/types/common.types";

const StartConvo = () => {
  const [convoData, setConvoData] = useState<TConvoDataType>({
    isConvoStarted: false,
    userMsg: "",
  });

  const { isConvoStarted, userMsg } = convoData;

  //   Funcs
  const handleClick = () =>
    setConvoData((prev) => ({ ...prev, isConvoStarted: true }));

  return (
    <div className="w-full h-full bg-[#fff]/80 relative">
      <Header />

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
        <ConvoMsg onClick={handleClick} />
      )}

      <FooterTxt className="text-rgbColors-4 bottom-16" />
    </div>
  );
};

export default StartConvo;
