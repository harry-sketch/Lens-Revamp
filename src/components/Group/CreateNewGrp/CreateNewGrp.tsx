import useLensStore from "@/clientStore";
import BasicInput from "@/components/common/BasicInput";
import { ChangeEvent, useState } from "react";

const CreateNewGrp = () => {
  const [searchPeer, setSearchPeer] = useState("");

  const sidebarHandlesArr = useLensStore((state) => state.sidebarHandlesArr);

  const searchOnChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchPeer(e.target.value);

  return (
    <div>
      <div className="text-custom-lens04 font-semibold text-lg mb-4">
        Add participants to the group
      </div>

      <BasicInput onChange={searchOnChange} value={searchPeer} />

      <div className="border-t border-custom-lens02 mt-3 py-3">
        {sidebarHandlesArr
          .filter(({ name }) =>
            name.toLocaleLowerCase().includes(searchPeer.toLocaleLowerCase())
          )
          .map(({ id, msg, name, timestamp, unreadCnt }) => (
            <div>{name}</div>
          ))}
      </div>
    </div>
  );
};

export default CreateNewGrp;
