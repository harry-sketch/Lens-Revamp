"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { shallow } from "zustand/shallow";

// Assets
import BasicIcons from "@/Assets/BasicIcons";

// Store
import useLensStore from "@/clientStore";

// Utils
import { cw, sliceAdd } from "@/utils/helpers";

// Dynamic
const Dropdown = dynamic(() => import("@/components/common/Dropdown"), {
  ssr: false,
});

interface Props {
  className?: string;
  children: JSX.Element;
}

const ProfileStrip: React.FC<Props> = ({ children, className }) => {
  const { address } = useLensStore((state) => state.peer, shallow);

  return (
    <div className={cw("flex items-center", className)}>
      <Image
        src="/images/SidebarAvatar.png"
        alt="sidebar-logo"
        width={30}
        height={30}
        loading="lazy"
        quality={100}
        className="object-contain rounded-full"
      />
      <span className=" text-custom-lens02 text-sm font-semibold text-center">
        {address ? sliceAdd(address) : "harsh.lens"}
      </span>

      <Dropdown sideOffset={10} align="end" className="w-60 z-10">
        <span className="cursor-pointer flex-1">{BasicIcons.opt}</span>
        {children}
      </Dropdown>
    </div>
  );
};

export default React.memo(ProfileStrip);
