import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IClientState } from "./clientTypes";
import createGroupChatSlice from "./slices/createGroupChatSlice";
import createModal from "./slices/createModal";

const useClientStore = create<IClientState>()(
  devtools(
    (...a) => ({
      ...createModal(...a),
      ...createGroupChatSlice(...a),
    }),
    {
      name: "client-store",
    }
  )
);

const { getState, setState } = useClientStore;

export { getState, setState };

export default useClientStore;
