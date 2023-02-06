import GroupIcons from "@/Assets/GroupIcons";
import useLensStore from "@/clientStore";
import BasicBtn from "@/components/common/BasicBtn";
import BasicInput from "@/components/common/BasicInput";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import GrpStrp from "./GrpStrp/GrpStrp";

const CreateNewGrp = () => {
  const [searchPeer, setSearchPeer] = useState("");

  const sidebarHandlesArr = useLensStore((state) => state.sidebarHandlesArr);

  const setSteps = useLensStore((state) => state.setSteps);

  const searchOnChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchPeer(e.target.value);

  return (
    <>
      <div className="text-custom-lens04 font-semibold text-lg mb-4">
        Add participants to the group
      </div>

      <BasicInput onChange={searchOnChange} value={searchPeer} />

      <div className="border-t border-custom-lens02 mt-3 py-3 overflow-y-auto overflow-x-hidden lensScroll h-56">
        {sidebarHandlesArr
          .filter(({ name }) =>
            name.toLocaleLowerCase().includes(searchPeer.toLocaleLowerCase())
          )
          .map(({ id, name }) => (
            <GrpStrp name={name} key={`create-new-grp-${id}`} />
          ))}
      </div>

      <BasicBtn
        variant="custom"
        text="Next"
        className="mt-4 bg-custom-lens02 text-custom-lens01"
        onClick={() => setSteps("uploadPhoto")}
      />
    </>
  );
};

export default CreateNewGrp;
