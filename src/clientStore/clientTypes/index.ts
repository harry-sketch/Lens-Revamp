import { IGroupChatstate } from "./group.client.type";
import { IModalState } from "./modal.client.type";

export type IClientState = IModalState & IGroupChatstate;
