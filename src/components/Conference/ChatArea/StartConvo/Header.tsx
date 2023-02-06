import Image from "next/image";

// Assets
import BasicIcons from "@/Assets/BasicIcons";

// Components
import Dropdown from "@/components/common/Dropdown";
import GroupMoreOpt from "@/components/Group/GroupMoreOpt/GroupMoreOpt";

const Header = () => (
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
        Benedita.lens
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
      <Dropdown
        className="z-10"
        align="end"
        trigger={
          <button type="button" className="mt-2">
            {BasicIcons.opt}
          </button>
        }
        sideOffset={5}
      >
        <GroupMoreOpt />
      </Dropdown>
    </div>
  </div>
);

export default Header;
