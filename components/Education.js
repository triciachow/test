export default function Education() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center py-6 gap-x-4  border-b">
        <div className="font-bold h-full lg:w-2/12 w-full self-start">
          Education
        </div>
        <div className="lg:w-8/12 w-full h-full flex flex-col justify-between">
          <p className="font-bold mb-2">University of London (SIM Campus)</p>
          <ul>
            <li>Bachelor of Science in Computer Science</li>
            <li>October 2020 - October 2023</li>
          </ul>
          <p className="font-bold my-2">Relevant Coursework in UoL</p>
          <div className="grid grid-rows-2 grid-flow-col gap-4 text-amber-400 font-bold">
            <div className="border border-amber-400 rounded-md p-2 flex items-center bg-white">
              Agile Software Projects
            </div>
            <div className="border border-amber-400 rounded-md p-2 flex items-center bg-white">
              Database, Network and the Web
            </div>
            <div className="border border-amber-400 rounded-md p-2 flex items-center bg-white">
              Web Development
            </div>
            <div className="border border-amber-400 rounded-md p-2 flex items-center bg-white">
              Software Design and Development
            </div>
          </div>
          <p className="font-bold my-2">
            Royal Melbourne Institute of Technology
          </p>
          <ul>
            <li>Bachelor of Communication with Distinction</li>
            <li>August 2019 - June 2020</li>
            <li>GPA: 3.3 / 4.0</li>
          </ul>
          <p className="font-bold my-2">Singapore Polytechnic</p>
          <ul>
            <li>Diploma in Media and Communication</li>
            <li>April 2015 - May 2018</li>
            <li>GPA: 3.6 / 4.0</li>
          </ul>
        </div>
      </div>
    </>
  );
}
