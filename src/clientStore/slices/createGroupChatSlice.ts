import SidebarHandlesArr from "@/hooks/SidearHandlesData";
import { StateCreator } from "zustand";
import { IClientState } from "../clientTypes";
import { IGroupChatstate } from "../clientTypes/group.client.type";

const createGroupChatSlice: StateCreator<
  IClientState,
  [],
  [],
  IGroupChatstate
> = (set, get) => ({
  steps: "",
  handleId: 0,
  sidebarHandlesArr: SidebarHandlesArr,

  setHandleId: (handleId) => {
    set(() => ({ handleId }));
  },

  setSteps: (steps) => {
    set({ steps });
  },
});

export default createGroupChatSlice;
