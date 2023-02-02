// Components
import BasicIcons from "@/Assets/BasicIcons";
import Image from "next/image";
import EmptyMsg from "./EmptyMsg";
import StartConvo from "./StartConvo/StartConvo";

const ChatArea = () => {
  const handleList = [
    { id: 1, name: "Benedita.lens" },
    { id: 2, name: "thor34.lens" },
  ];

  return (
    <section className="flex-1  bg-custom-lens03 h-full">
      {handleList.length > 0 ? <StartConvo /> : <EmptyMsg />}
    </section>
  );
};

export default ChatArea;
