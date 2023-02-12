import { NextPage } from "next";

// Components
import Showcase from "@/components/Conference/Showcase/Showcase";

const Conference: NextPage = () => (
  <main className="w-full h-screen flex">
    <Showcase />
  </main>
);

export default Conference;
