import { cw } from "@/utils/helpers";

interface Props {
  className?: string;
}

const FooterTxt: React.FC<Props> = ({ className }) => (
  <div
    className={cw(
      "flex items-center justify-center left-1/2 -translate-x-1/2 -translate-y-1/2 text-base absolute bottom-4",
      className
    )}
  >
    Powered by Huddle01
  </div>
);

export default FooterTxt;
