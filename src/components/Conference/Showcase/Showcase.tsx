"use client";

import { useCallback } from "react";

import dynamic from "next/dynamic";

// Store
import useLensStore from "@/clientStore";

// Components
import GroupInitModal from "@/components/common/GroupInitModal";
import { GroupChatInitSteps, titlesMsg } from "../Data/Data";

const Sidebar = dynamic(() => import("../Sidebar/Sidebar"), { ssr: false });
const ChatArea = dynamic(() => import("../ChatArea/ChatArea"), { ssr: false });

const Showcase = () => {
  const steps = useLensStore((state) => state.steps);

  const setSteps = useLensStore((state) => state.setSteps);

  // Funs
  const onClose = useCallback(() => setSteps(""), []);

  return (
    <>
      <Sidebar />
      <ChatArea />

      {steps ? (
        <GroupInitModal title={titlesMsg[steps]} onClose={onClose}>
          {GroupChatInitSteps[steps]}
        </GroupInitModal>
      ) : null}
    </>
  );
};

export default Showcase;
