import Image from "next/image";

const Navbar = () => (
  <nav className="py-5 px-12 absolute w-full top-0 ">
    <Image
      alt="lens"
      src="/images/lensLogo.png"
      width={100}
      height={60}
      loading="lazy"
      quality={100}
    />
  </nav>
);

export default Navbar;
