import Image from "next/image";
import img from "../assets/resume.svg";

export default function Involvements() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center py-6 gap-x-4">
        <div className="font-bold h-full lg:w-2/12 w-full self-start">
          Involvements
        </div>
        <div className="lg:w-8/12 w-full h-full flex flex-col justify-between">
          <p className="font-bold mb-2">
            Shopee Product & Design Challenge 2022
          </p>
          <ul>
            <li>Participant (Results yet to be released)</li>
            <li>September 2022 - Present</li>
          </ul>
          <p className="font-bold my-2">
            SIM Innovation and Networking Society (IONS)
          </p>
          <ul>
            <li>IONS Ambassador</li>
            <li>August 2022 - Present</li>
          </ul>
          <p className="font-bold my-2">SIM UI/UX Club</p>
          <ul>
            <li>ExCo Member - Head of Community</li>
            <li>November 2020 - May 2021</li>
            <li>GPA: 3.6 / 4.0</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center relative">
        <button className="border-2 border-amber-400 rounded-md px-4 py-2 text-amber-400 font-bold hover:bg-amber-400 hover:text-white w-32">
          Download Resume PDF
        </button>
      </div>

      <div className="absolute -right-60 -z-10 opacity-80">
        <Image src={img} width="606" height="637" />
      </div>
    </>
  );
}
