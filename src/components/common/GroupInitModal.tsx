import Overlay from "./Overlay";

interface Props {
  title: string;
  children: React.ReactNode;
}

const GroupInitModal: React.FC<Props> = ({ children, title }) => (
  <Overlay>
    <div
      className="bg-custom-lens02 rounded-lg"
      role="presentation"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="bg-custom-lens01 rounded-lg w-96 shadow-lg backdrop-blur-lg py-5 px-8 -translate-x-1 -translate-y-1 border-custom-lens02 border">
        <div className="text-custom-lens02">{title}</div>
        {children}
      </div>
    </div>
  </Overlay>
);

export default GroupInitModal;
