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
  setSteps: (steps) => {
    set({ steps });
  },
});

export default createGroupChatSlice;
