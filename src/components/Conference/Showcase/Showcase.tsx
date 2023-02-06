"use client";

import dynamic from "next/dynamic";

// Store
import useLensStore from "@/clientStore";

// Types
import { TStepType } from "@/clientStore/clientTypes/group.client.type";

// Components
import GroupInitModal from "@/components/common/GroupInitModal";
import CreateNewGrp from "@/components/Group/CreateNewGrp/CreateNewGrp";

const Sidebar = dynamic(() => import("../Sidebar/Sidebar"), { ssr: false });
const ChatArea = dynamic(() => import("../ChatArea/ChatArea"), { ssr: false });

const Showcase = () => {
  const steps = useLensStore((state) => state.steps);

  const GroupChatInitSteps: {
    [key in TStepType]: JSX.Element | null;
  } = {
    "": null,
    init: <CreateNewGrp />,
    uploadPhoto: <div>init</div>,
    reUploadPhoto: <div>init</div>,
    groupInfo: <div>init</div>,
    managePeers: <div>init</div>,
    error: <div>init</div>,
    leave: <div>init</div>,
    exit: <div>init</div>,
  };

  const titles: {
    [key in TStepType]: string;
  } = {
    init: "Create new group",
    error: "",
    "": "",
    exit: "",
    groupInfo: "",
    leave: "",
    managePeers: "",
    reUploadPhoto: "",
    uploadPhoto: "",
  };

  return (
    <>
      <Sidebar />
      <ChatArea />

      {steps ? (
        <GroupInitModal title={titles[steps]}>
          {GroupChatInitSteps[steps]}
        </GroupInitModal>
      ) : null}
    </>
  );
};

export default Showcase;
