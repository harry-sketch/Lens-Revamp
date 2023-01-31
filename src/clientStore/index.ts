import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IClientState } from "./clientTypes";
import createModal from "./slices/createModal";

const useClientStore = create<IClientState>()(
  devtools(
    (...a) => ({
      ...createModal(...a),
    }),
    {
      name: "client-store",
    }
  )
);

const { getState, setState } = useClientStore;

export { getState, setState };

export default useClientStore;
