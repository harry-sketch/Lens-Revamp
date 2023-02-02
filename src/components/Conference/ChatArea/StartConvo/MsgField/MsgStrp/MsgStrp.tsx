import React from "react";
import Image from "next/image";

import { cw } from "@/utils/helpers";

interface Props {
  name: string;
  msg: string;
  isSender?: boolean;
}

const MsgStrp: React.FC<Props> = ({ isSender, name, msg }) => (
  <div
    className={cw(
      "my-4 flex flex-col w-full relative",
      isSender ? "items-start" : "items-end"
    )}
  >
    {isSender ? (
      <Image
        alt="avatar"
        src="/images/SidebarAvatar.png"
        width={38}
        height={38}
        className="object-contain absolute -left-3 -top-3 "
      />
    ) : null}
    <div className="flex items-center mb-2 gap-2 ml-10">
      <div className="text-custom-lens01 text-sm font-medium">
        {isSender ? name : "You"}
      </div>
      <div className="text-custom-lens05 text-xs font-normal">
        Thursday 11:41am
      </div>
    </div>
    <div className="py-2.5 px-3.5 shadow-lg text-custom-lens01 bg-custom-lens04 break-all rounded-r-lg rounded-bl-lg">
      {isSender ? msg : "Awesome! Thanks."}
    </div>
  </div>
);

export default React.memo(MsgStrp);
