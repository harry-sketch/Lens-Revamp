import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IClientState } from "./clientTypes";
import createGroupChatSlice from "./slices/createGroupChatSlice";
import createModal from "./slices/createModal";
import createPeerSlice from "./slices/createPeerSlice";

const useLensStore = create<IClientState>()(
  devtools(
    (...a) => ({
      ...createModal(...a),
      ...createGroupChatSlice(...a),
      ...createPeerSlice(...a),
    }),
    {
      name: "client-store",
    }
  )
);

const { getState, setState } = useLensStore;

export { getState, setState };

export default useLensStore;
