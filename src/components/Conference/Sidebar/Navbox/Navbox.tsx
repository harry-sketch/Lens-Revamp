"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

// Assets
import BasicIcons from "@/Assets/BasicIcons";

// Components
import ProfileModal from "@/components/Profile/ProfileModal";
import useLensStore from "@/clientStore";
import { sliceAdd } from "@/utils/helpers";
const Dropdown = dynamic(() => import("@/components/common/Dropdown"), {
  ssr: false,
});

const Navbox = () => {
  const address = useLensStore((state) => state.peer.address);

  return (
    <nav className="flex items-center justify-between w-full bg-rgbColors-2 h-[7%]  px-8 border-b border-rgbColors-3">
      <Image
        src="/images/sidebarLogo.png"
        alt="sidebar-logo"
        width={30}
        height={30}
        loading="lazy"
        quality={100}
      />
      <div className="flex items-center gap-4">
        <Image
          src="/images/SidebarAvatar.png"
          alt="sidebar-logo"
          width={30}
          height={30}
          loading="lazy"
          quality={100}
          className="object-contain rounded-full"
        />
        <span className=" text-custom-lens02 text-sm font-medium text-center">
          {address ? sliceAdd(address) : "somethingLong.lens"}
        </span>
        <Dropdown sideOffset={10} align="end" className="w-60 z-10">
          <span className="cursor-pointer flex-1">{BasicIcons.opt}</span>
          <ProfileModal />
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbox;
