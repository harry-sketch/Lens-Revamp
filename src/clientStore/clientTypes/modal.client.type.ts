export type TActiveModal = "close" | "sigIn" | "success";

export interface IModalState {
  activeModal: TActiveModal;
  setActiveModal: (val: TActiveModal) => void;
}
