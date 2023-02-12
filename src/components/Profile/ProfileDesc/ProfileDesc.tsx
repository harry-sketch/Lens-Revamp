"use client";

import React, { useState } from "react";
import KeysComp from "./KeysComp/KeysComp";

// Components
import ProfileDescHandle from "./ProfileDescHandle";

interface IProfileState {
  isKeys: boolean;
  text: string;
}

const ProfileDesc = () => {
  const [profileData, setProfiledata] = useState<IProfileState>({
    isKeys: false,
    text: "Show Keys",
  });

  return (
    <div className="bg-custom-lens04 border border-custom-lens01 rounded-lg w-96 p-4 flex flex-col items-center justify-center text-center z-10">
      <ProfileDescHandle />

      {profileData.isKeys ? <KeysComp /> : null}

      <div className="mt-6 bg-custom-lens03 rounded-lg">
        <button
          onClick={() =>
            setProfiledata((prev) => ({
              ...prev,
              isKeys: !prev.isKeys,
              text: prev.text === "Show Keys" ? "Hide Keys" : "Show Keys",
            }))
          }
          type="button"
          className="bg-custom-lens01 w-40 py-2 rounded-lg -translate-x-1 -translate-y-1 text-xl text-custom-lens02 font-semibold"
        >
          {profileData.text}
        </button>
      </div>
    </div>
  );
};

export default ProfileDesc;
