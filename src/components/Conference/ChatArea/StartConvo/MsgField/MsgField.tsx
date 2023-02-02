import MsgStrp from "./MsgStrp/MsgStrp";

const MsgField = () => (
  <div className="h-[88.8%] overflow-y-auto overflow-x-hidden w-full px-6">
    {Array.from({ length: 200 }).map((_, i) => (
      <MsgStrp
        isSender={i % 2 !== 0 ? true : false}
        name="Benedita.lens"
        msg="Good timing — was just looking at this.cklznklzndklznldkjklz"
      />
    ))}
  </div>
);

export default MsgField;
