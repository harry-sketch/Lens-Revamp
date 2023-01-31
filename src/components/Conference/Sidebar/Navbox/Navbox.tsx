import Image from "next/image";

// Assets
import BasicIcons from "@/Assets/BasicIcons";

const Navbox = () => (
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
        somethingreallylong.lens
      </span>
      <span className="cursor-pointer flex-1">{BasicIcons.opt}</span>
    </div>
  </nav>
);

export default Navbox;
