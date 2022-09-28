import Link from "next/link";
import { about } from "../../lib/about";

export default function About() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 justify-center items-center py-6 border-b border-b-slate-300">
        <div className="font-bold h-full lg:w-2/12 w-full self-start text-sky-600">
          About Me
        </div>
        <div className="lg:w-8/12 w-full h-full flex flex-col gap-y-4">
          <p>{about.intro}</p>
          <div className="flex flex-col md:flex-row justify-around gap-4 p-4 border-sky-600 rounded-md  bg-gradient-to-r from-sky-100 to-fuchsia-100 text-sky-600 w-full lg:w-full h-auto drop-shadow-sm">
            <div>
              <small>Email</small>
              <p className="font-semibold">{about.email}</p>
            </div>
            <div>
              <small>Github</small>
              <Link href={`https://${about.github}`}>
                <p className="font-semibold">{about.github}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
