import Image from "next/image";

// Assets
import BasicIcons from "@/Assets/BasicIcons";

const ProfileModal = () => {
  const ModalData = [
    { title: "View profile", url: "" },
    { title: "Settings", url: "" },
    { title: "Support", url: "" },
    { title: "Sign Out", url: "" },
  ];

  return (
    <>
      <div className="border-b border-custom-lens05 flex items-center px-4 py-3 w-full gap-3">
        <Image
          src="/images/SidebarAvatar.png"
          alt="sidebar-logo"
          width={40}
          height={40}
          loading="lazy"
          quality={100}
          className="object-contain rounded-full"
        />

        <div>
          <div className="text-custom-lens04 text-sm font-semibold">
            adi23811.lens
          </div>
          <div className="flex items-center gap-2">
            <div className="text-custom-lens03 text-sm font-normal">
              0xF5s8...fu5xy8c
            </div>
            <div role="presentation">{BasicIcons.copy}</div>
          </div>
        </div>
      </div>
      <div className="py-4">
        {ModalData.map(({ title, url }) => (
          <div
            key={`profile-nodal-${title}`}
            className={`font-medium text-sm cursor-pointer mb-5 last:mb-0 px-4 ${
              title === "Sign Out"
                ? "text-red-400 border-t border-custom-lens05 pt-2"
                : "text-custom-lens03"
            }`}
          >
            {title}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfileModal;
