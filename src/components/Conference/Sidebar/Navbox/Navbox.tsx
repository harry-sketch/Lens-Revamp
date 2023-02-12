import Image from "next/image";

// Components
import ProfileModal from "@/components/Profile/ProfileModal";
import ProfileStrip from "./ProfileStrip/ProfileStrip";

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
    <ProfileStrip className="gap-4">
      <ProfileModal />
    </ProfileStrip>
  </nav>
);

export default Navbox;
