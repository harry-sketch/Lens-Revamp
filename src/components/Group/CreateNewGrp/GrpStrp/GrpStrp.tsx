import React from "react";
import Image from "next/image";

// Assets
import GroupIcons from "@/Assets/GroupIcons";

interface Props {
  name: string;
}

const GrpStrp: React.FC<Props> = ({ name }) => (
  <div className="flex items-center justify-between w-full mb-4 mt-2 pr-4 last:mb-0 last:mt-0">
    <div className="flex items-center gap-2">
      <Image alt="" src="/images/SidebarAvatar.png" width={35} height={35} />
      <div className="text-custom-lens04 font-semibold text-base">{name}</div>
    </div>

    <button type="button">{GroupIcons.inactive.circle}</button>
  </div>
);

export default React.memo(GrpStrp);
