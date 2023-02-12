"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Utils
import { cw } from "@/utils/helpers";

// Components
import ProfileStrip from "@/components/Conference/Sidebar/Navbox/ProfileStrip/ProfileStrip";

const ProfileNavbar = () => {
  const { push } = useRouter();

  return (
    <div
      className={cw(
        "w-full bg-custom-lens01 h-20 absolute top-0 left-0 py-4 px-14 flex items-center justify-between"
      )}
    >
      <div className="flex items-center gap-6">
        <Image
          src={"/images/sidebarLogo.png"}
          alt="profile-navbar"
          width={45}
          height={45}
        />
        <button
          type="button"
          onClick={() => push("/conference")}
          className="text-custom-lens04 text-sm font-semibold border border-rgbColors-7/50 rounded-lg cursor-pointer py-3 px-3.5"
        >
          Go Back
        </button>
      </div>

      <div className="flex items-center gap-6">
        <div>
          <div>Search</div>
        </div>
        <ProfileStrip className="gap-5">
          <div>sed</div>
        </ProfileStrip>
      </div>
    </div>
  );
};

export default React.memo(ProfileNavbar);
