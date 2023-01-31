import { StateCreator } from "zustand";
import { IClientState } from "../clientTypes";
import { IModalState } from "../clientTypes/modal.client.type";

const createModal: StateCreator<IClientState, [], [], IModalState> = (
  set,
  get
) => ({
  activeModal: "close",
  setActiveModal: (val) => {
    set(() => ({
      activeModal: val,
    }));
  },
});

export default createModal;
