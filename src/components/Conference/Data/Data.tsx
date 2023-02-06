import { TStepType } from "@/clientStore/clientTypes/group.client.type";

// Components
import CreateNewGrp from "@/components/Group/CreateNewGrp/CreateNewGrp";
import UploadPhoto from "@/components/Group/UploadPhoto/UploadPhoto";

export const GroupChatInitSteps: {
  [key in TStepType]: JSX.Element | null;
} = {
  "": null,
  init: <CreateNewGrp />,
  uploadPhoto: <UploadPhoto />,
  reUploadPhoto: <div>init</div>,
  groupInfo: <div>init</div>,
  managePeers: <div>init</div>,
  error: <div>init</div>,
  leave: <div>init</div>,
  exit: <div>init</div>,
};

export const titlesMsg: {
  [key in TStepType]: string;
} = {
  init: "Create new group",
  error: "",
  "": "",
  exit: "",
  groupInfo: "",
  leave: "",
  managePeers: "",
  reUploadPhoto: "Create new group",
  uploadPhoto: "Create new group",
};
