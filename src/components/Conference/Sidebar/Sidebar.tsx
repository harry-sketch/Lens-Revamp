"use client";

import { useState } from "react";

// Components
import ChatTab from "./ChatTab/ChatTab";
import Navbox from "./Navbox/Navbox";
import Tabs from "@/components/common/Tabs";
import BasicInput from "@/components/common/BasicInput";
import Dropdown from "@/components/common/Dropdown";
import InitDropdown from "@/components/Group/InitDropdown/InitDropdown";

// Assets
import BasicIcons from "@/Assets/BasicIcons";

const Sidebar = () => {
  const [searchHandle, setSearchHandle] = useState<string>("");

  const [activeTab, setActiveTab] = useState<number>(1);

  const tabsHeader = ["Chat", "Huddle", "Followers"];

  const TabsData: {
    [key: number]: JSX.Element;
  } = {
    1: <ChatTab />,
    2: <div>huddle</div>,
    3: <div>followers</div>,
  };

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

      <div className="h-[6%] flex items-end justify-between border-b-2 border-rgbColors-3 px-8 gap-8">
        <Tabs
          className="justify-center"
          tabsHeader={tabsHeader}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <Dropdown
          align="end"
          className="bg-rgbColors-6 shadow-lg backdrop-blur-lg border border-custom-lens02 py-2.5 px-4"
        >
          <div className="cursor-pointer  pb-1.5">{BasicIcons.add}</div>
          <InitDropdown />
        </Dropdown>
      </div>

      <div className="overflow-y-auto  h-[77%]  pt-4 px-8 overflow-x-hidden lensScroll">
        {activeTab ? TabsData[activeTab] : null}
      </div>
    </aside>
  );
};

export default Sidebar;
