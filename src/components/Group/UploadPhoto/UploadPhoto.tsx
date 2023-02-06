import { useCallback, useRef } from "react";

// Store
import useLensStore from "@/clientStore";

// Components
import BasicBtn from "@/components/common/BasicBtn";
import BasicInput from "@/components/common/BasicInput";
import BasicIcons from "@/Assets/BasicIcons";

const UploadPhoto = () => {
  const uploadRef = useRef<null | HTMLInputElement>(null);

  const setSteps = useLensStore((state) => state.setSteps);

  // Funs
  const onChange = () => {};

  const goBack = useCallback(() => setSteps("init"), []);

  const handleCreateGroup = () => {};

  return (
    <>
      <div className="text-sm font-normal text-custom-lens04">
        Peers in this group
      </div>

      <button
        className="bg-custom-lens05 rounded-full w-36 h-36  mt-7 mb-4 text-base font-semibold text-custom-lens04 relative flex items-center justify-center flex-col"
        type="button"
        onClick={() => uploadRef.current?.click()}
      >
        <input ref={uploadRef} type="file" className="hidden" placeholder="" />
        <span>{BasicIcons.uploadImage}</span>
        Upload photo
      </button>
      <div>
        <div className="text-custom-lens03 text-sm font-medium mb-1">
          Group name
        </div>
        <BasicInput
          value=""
          onChange={onChange}
          className="bg-custom-lens03"
          placeholder="Enter a name for your group"
        />
      </div>

      <div className="mt-8 flex items-center gap-6">
        <BasicBtn variant="secondary" text="Go back" onClick={goBack} />
        <BasicBtn
          variant="custom"
          text="Create group"
          onClick={handleCreateGroup}
          className="bg-custom-lens02 text-custom-lens01"
        />
      </div>
    </>
  );
};

export default UploadPhoto;
