import { ChangeEvent, useCallback, useRef, useState } from "react";

// Store
import useLensStore from "@/clientStore";

// Components
import BasicBtn from "@/components/common/BasicBtn";
import BasicInput from "@/components/common/BasicInput";
import BasicIcons from "@/Assets/BasicIcons";
import { toast } from "react-hot-toast";

const UploadPhoto = () => {
  const [groupName, setGroupName] = useState<string>("");

  const uploadRef = useRef<null | HTMLInputElement>(null);

  const steps = useLensStore((state) => state.steps);

  const setSteps = useLensStore((state) => state.setSteps);

  // Funs
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(groupName);
    setGroupName(e.target.value);
  };

  const goBack = useCallback(() => setSteps("init"), []);

  const handleUpload = () => {
    uploadRef.current?.click();

    setTimeout(() => {
      setSteps("reUploadPhoto");
    }, 5000);
  };

  const handleCreateGroup = () => {
    if (!groupName.length) {
      setSteps("error");
      toast.error("Please give a name to the group");
      return;
    }

    setTimeout(() => {
      setSteps("");
      toast.success(`Group  ${groupName} created`, {
        position: "top-right",
      });
    }, 2000);
  };

  return (
    <>
      <div className="text-sm font-normal text-custom-lens04">
        Peers in this group
      </div>

      <button
        className="bg-custom-lens05 rounded-full w-36 h-36  mt-7 mb-4 text-base font-semibold text-custom-lens04 relative flex items-center justify-center flex-col"
        type="button"
        onClick={handleUpload}
      >
        <input ref={uploadRef} type="file" className="hidden" />
        <span>{BasicIcons.uploadImage}</span>
        {steps === "reUploadPhoto" ? "Reupload" : "Upload photo"}
      </button>
      <div>
        <div className="text-custom-lens03 text-sm font-medium mb-1">
          Group name
        </div>
        <BasicInput
          value={groupName}
          onChange={onChange}
          className="bg-custom-lens03 "
          inputClass="text-custom-lens01 placeholder:text-custom-lens01"
          placeholder="Enter a name for your group"
        />
      </div>

      <div className="mt-8 flex items-center gap-6">
        <BasicBtn variant="secondary" text="Go back" onClick={goBack} />
        <BasicBtn
          disabled={!groupName.length}
          variant="custom"
          text="Create group"
          onClick={handleCreateGroup}
          className="bg-custom-lens02 text-custom-lens01"
        />
      </div>

      {steps === "error" ? (
        <div className="text-base text-red-400 font-normal mt-2">
          There was a problem in creating the group, please try again.
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default UploadPhoto;
