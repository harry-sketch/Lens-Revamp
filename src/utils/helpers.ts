import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const sliceMsg = (msg: string) => {
  return `${msg.slice(0, 31)}...`;
};

export const cw = (...input: ClassValue[]) => {
  return twMerge(clsx(input));
};

export const sliceAdd = (add: string) => {
  return `${add.slice(0, 5)}....${add.slice(add.length - 5)}`;
};
