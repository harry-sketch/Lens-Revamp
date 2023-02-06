import BasicIcons from "@/Assets/BasicIcons";
import React from "react";
import Overlay from "./Overlay";

interface Props {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const GroupInitModal: React.FC<Props> = ({ children, title, onClose }) => (
  <Overlay onClick={onClose}>
    <div
      className="bg-custom-lens02 rounded-lg"
      role="presentation"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="bg-custom-lens01 rounded-lg w-96 shadow-lg backdrop-blur-lg py-5 px-8 -translate-x-1 -translate-y-1 border-custom-lens02 border">
        <div className="flex items-center justify-between w-full  mb-7">
          <div className="text-custom-lens02 font-semibold text-2xl ">
            {title}
          </div>
          <button type="button" onClick={onClose}>
            {BasicIcons.close}
          </button>
        </div>
        <div className="h-96 z-20">{children}</div>
      </div>
    </div>
  </Overlay>
);

export default GroupInitModal;
