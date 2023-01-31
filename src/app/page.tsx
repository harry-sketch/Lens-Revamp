import Image from "next/image";
import { Spline_Sans } from "@next/font/google";

// Components
import InitImage from "@/components/Init/InitImage";
import InitHandle from "@/components/Init/InitHandle";
import Navbar from "@/components/Navbar/Navbar";

const spline = Spline_Sans({
  subsets: ["latin"],
  weight: "400",
});

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

      <div
        className={`${spline.className} text-custom-1 text-base absolute bottom-4`}
      >
        Powered by Huddle01
      </div>
    </main>
  );
}
