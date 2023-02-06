import useLensStore from "@/clientStore";

const GroupMoreOpt = () => {
  const setSteps = useLensStore((state) => state.setSteps);

  return (
    <div className=" bg-custom-lens02 rounded-lg ">
      <div
        className="py-2.5 px-4 bg-custom-lens01 -translate-x-0.5 -translate-y-0.5 rounded-lg"
        onClick={() => setSteps("managePeers")}
      >
        len
      </div>
    </div>
  );
};

export default GroupMoreOpt;
