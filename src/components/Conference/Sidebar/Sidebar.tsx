"use client";

// Components
import Navbox from "./Navbox/Navbox";
import BasicInput from "@/components/common/BasicInput";
import { useState } from "react";

const Sidebar = () => {
  const [searchHandle, setSearchHandle] = useState<string>("");

  return (
    <aside className="w-[400px] h-full">
      <Navbox />
      <div className="px-8 flex items-center justify-center h-[10%]">
        <BasicInput
          icon="search"
          value={searchHandle}
          onChange={(e) => setSearchHandle(e.target.value)}
        />
      </div>

      <div className="h-[6%]">
        <span>chat</span>
        <span>huddle</span>
        <span>follow</span>
      </div>

      <div className="overflow-y-auto text-white border h-[77%]">
        {Array.from({ length: 100 }).map((_, i) => (
          <div>{1}</div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
