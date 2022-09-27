import Image from "next/image";
import img from "../../assets/resume.svg";
import { involvements } from "../../lib/involvements";

export default function Involvements() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center py-6 gap-x-4">
        <div className="font-bold h-full lg:w-2/12 w-full self-start">
          Involvements
        </div>
        <div className="lg:w-8/12 w-full h-full flex flex-col justify-between">
          {involvements.map((inv, index) => {
            return (
              <div key={index} className="mb-4">
                <p className="font-bold mb-2">{inv.activity}</p>
                <ul>
                  <li>{inv.details}</li>
                  <li>{inv.duration}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center mb-8">
        <a
          href="/Resume_Tricia.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="border-2 border-sky-600 rounded-md px-4 py-2 text-sky-600 font-bold hover:bg-sky-600 hover:text-white">
            Download Resume PDF
          </div>
        </a>
      </div>
    </>
  );
}
