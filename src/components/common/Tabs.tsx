import React from "react";

// UI Primitive
import * as RadixTabs from "@radix-ui/react-tabs";

interface Props {
  activeTab: number;
  className?: string;
  tabsHeader: Array<string>;
  setActiveTab: (activeTab: number) => void;
}

const Tabs: React.FC<Props> = ({
  tabsHeader,
  activeTab,
  setActiveTab,
  className,
}) => (
  <RadixTabs.Root
    defaultValue={`tab-${activeTab.toString()}`}
    className="w-full"
  >
    <RadixTabs.TabsList className={`flex items-center  gap-10 ${className}`}>
      {tabsHeader.map((tab, i) => {
        if (tab) {
          return (
            <RadixTabs.TabsTrigger
              value={`tab-${i + 1}`}
              key={`tabs-toggle-${i + 1}`}
              onClick={() => setActiveTab(i + 1)}
              className={`transition-all duration-300 ease-out pb-1.5 font-medium text-base ${
                activeTab === i + 1
                  ? "border-b-2 text-custom-lens04"
                  : "border-transparent text-custom-lens03 border-b-2"
              }`}
            >
              {tab}
            </RadixTabs.TabsTrigger>
          );
        }

        return null;
      })}
    </RadixTabs.TabsList>
  </RadixTabs.Root>
);

export default React.memo(Tabs);
