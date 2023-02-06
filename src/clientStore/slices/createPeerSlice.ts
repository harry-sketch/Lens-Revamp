import { StateCreator } from "zustand";
import { IClientState } from "../clientTypes";
import { IPeerState } from "../clientTypes/peer.client.types";

const createPeerSlice: StateCreator<IClientState, [], [], IPeerState> = (
  set,
  get
) => ({
  peer: {
    address: "",
  },

  setAddress: (address) => {
    set(() => ({
      peer: {
        ...get().peer,
        address,
      },
    }));
  },
});

export default createPeerSlice;
