export type IPeerState = {
  peer: {
    address: string;
  };

  setAddress: (address: string) => void;
};
