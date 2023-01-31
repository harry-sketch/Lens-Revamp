import { sliceMsg } from "@/utils/helpers";
import Image from "next/image";
import HandleStrp from "./HandleStrp";

const ChatTab = () => (
  <>
    <HandleStrp
      unreadCnt={3}
      handleName="Benedita.lens"
      timestamp="2m ago"
      msg="Did you check out that new nft collection called, Doodles?"
    />
  </>
);

export default ChatTab;
