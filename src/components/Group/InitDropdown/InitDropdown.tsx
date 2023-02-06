import useLensStore from "@/clientStore";

const InitDropdown = () => {
  const setSteps = useLensStore((state) => state.setSteps);

  return (
    <>
      <button
        type="button"
        onClick={() => setSteps("init")}
        className="text-custom-lens04 cursor-pointer text-sm font-medium mb-5"
      >
        Create a group
      </button>
      <div className="text-rgbColors-7/50 text-sm font-medium cursor-default">
        More options coming soon
      </div>
    </>
  );
};

export default InitDropdown;
