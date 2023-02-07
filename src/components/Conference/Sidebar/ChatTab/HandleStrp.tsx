import React from "react";
import Image from "next/image";

// Utils
import { sliceMsg } from "@/utils/helpers";

interface Props {
  msg: string;
  handleName: string;
  timestamp: string;
  unreadCnt: number;
  onClick: () => void;
}

const HandleStrp: React.FC<Props> = ({
  handleName,
  msg,
  timestamp,
  unreadCnt,
  onClick,
}) => (
  <div
    className="flex items-center justify-between cursor-pointer mb-4 last:mb-2"
    onClick={onClick}
    role="presentation"
  >
    <div className="flex items-center gap-4">
      <Image
        src="/images/SidebarAvatar.png"
        alt="peer-avatar"
        width={45}
        height={45}
        className="object-contain"
      />
      <div>
        <div className="text-base font-semibold text-custom-lens04">
          {handleName}
        </div>
        <div className="truncate text-custom-lens02 text-sm font-normal">
          {sliceMsg(msg)}
        </div>
      </div>
    </div>
    <div className="flex items-end flex-col gap-1.5">
      <div className="text-custom-lens03/60 text-sm">{timestamp}</div>
      <div className="bg-custom-lens02 rounded-full text-sm font-medium h-5 w-5 grid place-items-center">
        {unreadCnt}
      </div>
    </div>
  </div>
);

export default React.memo(HandleStrp);
