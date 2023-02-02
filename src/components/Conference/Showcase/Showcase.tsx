"use client";

import dynamic from "next/dynamic";

// Store
import useClientStore from "@/clientStore";

// Types
import { TStepType } from "@/clientStore/clientTypes/group.client.type";

// Components
import GroupInitModal from "@/components/common/GroupInitModal";

const Sidebar = dynamic(() => import("../Sidebar/Sidebar"), { ssr: false });
const ChatArea = dynamic(() => import("../ChatArea/ChatArea"), { ssr: false });

const Showcase = () => {
  const steps = useClientStore((state) => state.steps);

  const GroupChatInitSteps: {
    [key in TStepType]: JSX.Element | null;
  } = {
    "": null,
    init: <div>init</div>,
    uploadPhoto: <div>init</div>,
    reUploadPhoto: <div>init</div>,
    groupInfo: <div>init</div>,
    managePeers: <div>init</div>,
    error: <div>init</div>,
    leave: <div>init</div>,
    exit: <div>init</div>,
  };

  return (
    <>
      <Sidebar />
      <ChatArea />

      {steps ? (
        <GroupInitModal title="">{GroupChatInitSteps[steps]}</GroupInitModal>
      ) : null}
    </>
  );
};

export default Showcase;
