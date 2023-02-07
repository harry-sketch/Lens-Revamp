import { StateCreator } from "zustand";
import { IClientState } from "../clientTypes";
import { IPeerState } from "../clientTypes/peer.client.types";

const createPeerSlice: StateCreator<IClientState, [], [], IPeerState> = (
  set,
  get
) => ({
  peer: {
    handle: "",
    address: "",
    avatarUrl: "",
    isConvoStarted: false,
  },

  setAddress: (address) => {
    set(() => ({
      peer: {
        ...get().peer,
        address,
      },
    }));
  },

  setAvatarUrl: (url) => {
    set(() => ({
      peer: {
        ...get().peer,
        avatarUrl: url,
      },
    }));
  },

  setHandle: (handle) => {
    set(() => ({
      peer: {
        ...get().peer,
        handle,
      },
    }));
  },

  setIsConvoStarted: (val) => {
    set(() => ({
      peer: {
        ...get().peer,
        isConvoStarted: val,
      },
    }));
  },
});

export default createPeerSlice;
