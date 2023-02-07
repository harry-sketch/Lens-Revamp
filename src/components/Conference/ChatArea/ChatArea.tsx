// Components
import useLensStore from "@/clientStore";
import EmptyMsg from "./EmptyMsg";
import StartConvo from "./StartConvo/StartConvo";

const ChatArea = () => {
  const isPeerSelctedForChat = useLensStore(
    (state) => state.isPeerSelctedForChat
  );
  return (
    <section className="flex-1  bg-custom-lens03 h-full">
      {isPeerSelctedForChat ? <StartConvo /> : <EmptyMsg />}
    </section>
  );
};

export default ChatArea;
