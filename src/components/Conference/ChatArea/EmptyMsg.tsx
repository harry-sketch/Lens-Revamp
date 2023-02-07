import FooterTxt from "@/components/common/FooterTxt";
import Image from "next/image";

const EmptyMsg = () => (
  <div className="flex items-center justify-center flex-col h-full relative">
    <Image
      src="/images/ChatAreaImg.png"
      alt="chatArea-img"
      width={200}
      height={200}
      quality={100}
    />

    <div className="my-6 font-normal text-2xl text-custom-lens01 max-w-md text-center">
      Select a Message to chat, huddle with, or search for a Lens profile
    </div>

    <div className="bg-custom-lens04 rounded flex items-center justify-center flex-col py-3 max-w-sm">
      <div className=" text-custom-lens01 text-sm font-normal text-center">
        Please save your keys to secure your account, in case you reset your
        browser.
      </div>
      <button
        type="button"
        className="mt-2 text-custom-lens01 font-semibold text-sm cursor-pointer"
      >
        Go to my Profile
      </button>
    </div>

    <FooterTxt className="text-rgbColors-4" />
  </div>
);

export default EmptyMsg;
