import React from "react";
import Image from "next/image";

// Assets
import BasicIcons from "@/Assets/BasicIcons";

// Components
import Dropdown from "@/components/common/Dropdown";
import GroupMoreOpt from "@/components/Group/GroupMoreOpt/GroupMoreOpt";
import { TSidebarHandlesType } from "@/clientStore/clientTypes/group.client.type";

interface Props {
  activeUser: TSidebarHandlesType;
}

const Header: React.FC<Props> = ({ activeUser }) => (
  <div className="bg-custom-lens01 w-full h-[7.2%] flex items-center justify-between px-6 py-2.5">
    <div className="flex items-center gap-4">
      <Image
        src="/images/SidebarAvatar.png"
        alt="peer-avatar"
        width={40}
        height={40}
        className="object-contain"
      />
      <div className="text-base font-semibold text-custom-lens04">
        {activeUser.name}
      </div>
    </div>
    <div className="flex items-center  gap-4 cursor-pointer">
      <button
        type="button"
        className="bg-rgbColors-5 rounded-lg flex items-center gap-2.5 backdrop-blur-md py-1.5 w-40  justify-center text-custom-lens04 text-sm font-semibold cursor-pointer"
      >
        {BasicIcons.huddle}
        Start Huddle
      </button>
      <button type="button">{BasicIcons.search}</button>
      <Dropdown className="z-10" align="end" sideOffset={5}>
        <div>{BasicIcons.opt}</div>
        <GroupMoreOpt />
      </Dropdown>
    </div>
  </div>
);

export default React.memo(Header);
