import { education } from "../../lib/education";

export default function Education() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center py-6 gap-4 border-b border-b-slate-300">
        <div className="font-bold h-full lg:w-2/12 w-full self-start text-sky-600">
          Education
        </div>
        <div className="lg:w-8/12 w-full h-full flex flex-col justify-between">
          {education.map((edu, index) => {
            return (
              <div key={index}>
                <p className="font-bold my-2">{edu.school}</p>
                <ul>
                  <li>{edu.major}</li>
                  <li>
                    {edu.modules && (
                      <span>Relevant Modules: {edu.modules}</span>
                    )}
                  </li>
                  <li>{edu.duration}</li>
                  <li>GPA: {edu.gpa}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
