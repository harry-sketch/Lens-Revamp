import React from "react";
import Image from "next/image";

// Assets
import Avatar from "@/Assets/images/Avatar.png";

// Components
import FollowersComp from "./FollowersComp";

const ProfileDescHandle = () => {
  const FollowersData = [
    {
      count: "59",
      title: "Followers",
      className: "border-r border-custom-lens03 py-2.5 pr-4",
    },
    {
      title: "Following",
      count: "18",
      className: "pl-4",
    },
  ];

  return (
    <div>
      <Image
        src={Avatar}
        alt="profile-logo"
        width={120}
        height={120}
        quality={100}
        placeholder="blur"
        className="mx-auto"
      />
      <div className="text-custom-lens01 text-3xl font-bold my-2">Harsh</div>
      <div className="text-rgbColors-6 text-lg font-medium">@harsh.lens</div>
      <div className="bg-custom-lens03 px-3 py-1 rounded-3xl text-custom-lens05 text-sm font-normal mt-3 mb-6 w-36 mx-auto">
        0xF5s8...fu5xy8c
      </div>
      <div className="w-80 border border-custom-lens03 rounded  flex items-center justify-center">
        {FollowersData.map(({ className, title, count }) => (
          <FollowersComp
            key={`followers-${title}`}
            count={count}
            title={title}
            className={className}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(ProfileDescHandle);
