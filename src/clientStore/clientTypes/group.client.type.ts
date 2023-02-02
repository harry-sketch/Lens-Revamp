export type TStepType =
  | ""
  | "init"
  | "uploadPhoto"
  | "error"
  | "reUploadPhoto"
  | "managePeers"
  | "groupInfo"
  | "leave"
  | "exit";

export interface IGroupChatstate {
  steps: TStepType;
  setSteps: (step: TStepType) => void;
}
