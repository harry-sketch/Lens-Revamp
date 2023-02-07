export type IPeerState = {
  peer: {
    address: string;
    avatarUrl: string;
    handle: string;
  };

  setAddress: (address: string) => void;
  setAvatarUrl: (url: string) => void;
  setHandle: (handle: string) => void;
};
