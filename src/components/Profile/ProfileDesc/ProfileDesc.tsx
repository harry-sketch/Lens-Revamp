"use client";

import React, { useState } from "react";

// Components
import ProfileDescHandle from "./ProfileDescHandle";

const ProfileDesc = () => {
  console.log("profile desc///////////");

  const [isKeys, setIsKeys] = useState<boolean>(false);

  return (
    <div className="bg-custom-lens04 border border-custom-lens01 rounded-lg w-96 p-4 flex flex-col items-center justify-center text-center">
      <ProfileDescHandle />

      {isKeys ? <div>keys</div> : null}

      <div className="mt-6 bg-custom-lens03 rounded-lg">
        <button
          onClick={() => setIsKeys((prev) => !prev)}
          type="button"
          className="bg-custom-lens01 w-40 py-2 rounded-lg -translate-x-1 -translate-y-1 text-xl text-custom-lens02 font-semibold"
        >
          Show Keys
        </button>
      </div>
    </div>
  );
};

export default ProfileDesc;
