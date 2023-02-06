export type TActiveModal = "close" | "sigIn";

export interface IModalState {
  activeModal: TActiveModal;
  setActiveModal: (val: TActiveModal) => void;
}
