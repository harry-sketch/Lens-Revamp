import ChatArea from "@/components/Conference/ChatArea/ChatArea";
import Sidebar from "@/components/Conference/Sidebar/Sidebar";

const Conference = () => (
  <main className="w-full h-screen flex">
    <Sidebar />
    <ChatArea />
  </main>
);

export default Conference;
