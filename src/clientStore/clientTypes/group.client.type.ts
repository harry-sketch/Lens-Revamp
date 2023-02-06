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

export type TSidebarHandlesType = {
  id: number;
  name: string;
  msg: string;
  timestamp: string;
  unreadCnt: number;
};

export interface IGroupChatstate {
  steps: TStepType;
  handleId: number;
  selectedGroupPeers: TSidebarHandlesType[];
  setSelectedGroupPeers: (peer: TSidebarHandlesType) => void;
  setHandleId: (handleId: number) => void;
  sidebarHandlesArr: TSidebarHandlesType[];
  setSteps: (step: TStepType) => void;
}
