// Components
import EmptyMsg from "./EmptyMsg";
import StartConvo from "./StartConvo/StartConvo";

const ChatArea = () => {
  return (
    <section className="flex-1  bg-custom-lens03 h-full">
      {true ? <StartConvo /> : <EmptyMsg />}
    </section>
  );
};

export default ChatArea;
