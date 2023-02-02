import { ChangeEvent } from "react";

export type THandleChangeType = ChangeEvent<HTMLInputElement>;

export type TConvoDataType = {
  isConvoStarted: boolean;
  userMsg: string;
};
