import Image from "next/image";
import About from "../components/About";
import Education from "../components/Education";
import Involvements from "../components/Involvements";
import Skills from "../components/Skills";

export default function Resume() {
  return (
    <>
      <div className="flex flex-col gap-y-8 xl:w-8/12 m-auto">
        <About />
        <Education />
        <Skills />
        <Involvements />
      </div>
    </>
  );
}
