import React from "react";

// Components
import BasicBtn from "./BasicBtn";
import Loading from "@/app/Lens/loading";

interface Props {
  title: string;
  desc: string;
  onClick: () => void;
}

const Modal: React.FC<Props> = ({ title, desc, onClick }) => (
  <div
    onClick={(e) => e.stopPropagation()}
    role="presentation"
    className="bg-custom-lens02 rounded-lg"
  >
    <div className="bg-custom-lens01 border border-custom-lens02 rounded-lg p-5 -translate-x-1 -translate-y-1 flex items-center justify-center flex-col">
      <div className="text-custom-lens02 text-lg">{title}</div>
      <div className="bg-btn-primary flex items-center justify-center flex-col mt-4 mb-6 rounded py-3 px-4">
        <Loading />
        <div className="mt-2.5 text-custom-lens01 text-sm  text-center max-w-xs">
          {desc}
        </div>
      </div>
      <BasicBtn
        className="w-60"
        onClick={onClick}
        text="Cancel Sign in"
        variant="secondary"
      />
    </div>
  </div>
);

export default React.memo(Modal);
