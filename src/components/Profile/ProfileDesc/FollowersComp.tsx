import { cw } from "@/utils/helpers";
import React from "react";

interface Props {
  title: string;
  count: string;
  className?: string;
}

const FollowersComp: React.FC<Props> = ({ className, count, title }) => (
  <div className={cw("flex items-center gap-1", className)}>
    <div className="text-custom-lens01 text-sm font-medium">{count}</div>
    <div className="text-rgbColors-8/30 text-sm font-normal">{title}</div>
  </div>
);

export default React.memo(FollowersComp);
