import { IGroupChatstate } from "./group.client.type";
import { IModalState } from "./modal.client.type";
import { IPeerState } from "./peer.client.types";

export type IClientState = IModalState & IGroupChatstate & IPeerState;
