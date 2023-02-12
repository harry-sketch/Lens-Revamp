import Image from "next/image";
import { useRouter } from "next/navigation";

// Assets
import BasicIcons from "@/Assets/BasicIcons";

// Store
import useLensStore from "@/clientStore";

// Helpers
import { sliceAdd, cw } from "@/utils/helpers";

const ProfileModal = () => {
  const { push } = useRouter();

  const address = useLensStore((state) => state.peer.address);

  const ModalData = [
    { title: "View profile", url: "/profile" },
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
              {sliceAdd(address)}
            </div>
            <button
              type="button"
              onClick={() => navigator.clipboard.writeText(address)}
            >
              {BasicIcons.copy}
            </button>
          </div>
        </div>
      </div>
      <div className="py-4">
        {ModalData.map(({ title, url }) => (
          <div
            role="presentation"
            key={`profile-modal-${title}`}
            className={cw(
              "font-medium text-sm cursor-pointer mb-5 last:mb-0 px-4",
              title === "Sign Out"
                ? "text-red-400 border-t border-custom-lens05 pt-2"
                : "text-custom-lens03"
            )}
            onClick={() => push(url)}
          >
            {title}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfileModal;
