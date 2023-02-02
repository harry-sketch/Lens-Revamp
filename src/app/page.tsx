import Image from "next/image";

// Components
import InitImage from "@/components/Init/InitImage";
import InitHandle from "@/components/Init/InitHandle";
import Navbar from "@/components/Navbar/Navbar";
import FooterTxt from "@/components/common/FooterTxt";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col h-screen w-full relative ">
      <Navbar />
      <Image
        alt="welcome text"
        src="/images/landing/welcomeTxt.png"
        width={700}
        height={700}
        loading="lazy"
        quality={100}
      />

      <InitImage />

      <InitHandle />

      <FooterTxt className="text-custom-1" />
    </main>
  );
}
