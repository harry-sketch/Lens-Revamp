export type IPeerState = {
  peer: {
    address: string;
    avatarUrl: string;
    handle: string;
    isConvoStarted: boolean;
  };
  isPeerSelctedForChat: boolean;

  setAddress: (address: string) => void;
  setAvatarUrl: (url: string) => void;
  setHandle: (handle: string) => void;
  setIsConvoStarted: (val: boolean) => void;
  setIsPeerSelectedForChar: (val: boolean) => void;
};
