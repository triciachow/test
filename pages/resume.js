import About from "../components/resume/About";
import Education from "../components/resume/Education";
import Involvements from "../components/resume/Involvements";
import Skills from "../components/resume/Skills";

export default function Resume() {
  return (
    <>
      <div className="flex flex-col xl:w-8/12 m-auto">
        <About />
        <Education />
        <Skills />
        <Involvements />
      </div>
    </>
  );
}
