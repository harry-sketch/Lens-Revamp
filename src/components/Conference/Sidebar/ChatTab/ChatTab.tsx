import useLensStore from "@/clientStore";
import HandleStrp from "./HandleStrp";

const ChatTab = () => {
  const sidebarHandlesArr = useLensStore((state) => state.sidebarHandlesArr);

  const setHandleId = useLensStore((state) => state.setHandleId);

  const setIsPeerSelectedForChar = useLensStore(
    (state) => state.setIsPeerSelectedForChar
  );

  // Funs
  const handleSidebarHandles = (id: number) => {
    setHandleId(id);
    setIsPeerSelectedForChar(true);
  };

  return (
    <>
      {sidebarHandlesArr.map(({ id, msg, name, timestamp, unreadCnt }) => (
        <HandleStrp
          unreadCnt={unreadCnt}
          handleName={name}
          timestamp={timestamp}
          msg={msg}
          key={id}
          onClick={() => handleSidebarHandles(id)}
        />
      ))}
    </>
  );
};

export default ChatTab;
