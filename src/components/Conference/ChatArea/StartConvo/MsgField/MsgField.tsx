import React from "react";

import MsgStrp from "./MsgStrp/MsgStrp";

// Store
import { TSidebarHandlesType } from "@/clientStore/clientTypes/group.client.type";

interface Props {
  activeUser: TSidebarHandlesType;
}

const MsgField: React.FC<Props> = ({ activeUser }) => {
  return (
    <div className="h-[88.8%] overflow-y-auto overflow-x-hidden w-full px-6 lensScroll">
      {activeUser.msg.length > 4
        ? Array.from({ length: 200 }).map((_, i) => (
            <MsgStrp
              key={i}
              isSender={i % 2 !== 0 ? true : false}
              name={activeUser.name}
              msg={activeUser.msg}
            />
          ))
        : "sed life"}
    </div>
  );
};

export default React.memo(MsgField);
