"use client";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const Overlay: React.FC<Props> = ({ children, onClick }) => (
  <div
    className="bg-rgbColors-1 fixed inset-0 w-full h-full grid place-items-center"
    role="presentation"
    onClick={onClick}
  >
    {children}
  </div>
);

export default Overlay;
