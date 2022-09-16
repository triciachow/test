import Image from "next/image";
import Link from "next/link";
import img from "../assets/hello.svg";

export default function Home() {
  return (
    <>
      <main className="h-full flex flex-col lg:flex-row justify-center gap-x-8">
        <div className="lg:h-1/2 h-1/3 flex flex-col justify-center mt-4">
          <h1 className="font-poppins font-bold text-5xl mb-8">
            Hello, I&apos;m <span className="text-amber-400">Tricia 🙋🏻‍♀️</span>
          </h1>
          <div className="flex flex-col gap-y-2 mb-8">
            <h3>👩🏻‍💻 Aspiring frontend developer.</h3>
            <h3>
              📚 Currently a computer science student in University of London.
            </h3>
          </div>

          <div className="flex gap-x-4">
            <Link href="/resume">
              <button className="border-2 border-amber-400 rounded-md px-4 py-2 text-amber-400 font-bold hover:bg-amber-400 hover:text-white">
                View Resume
              </button>
            </Link>
            <Link href="/projects">
              <button className="border-2 border-amber-400 rounded-md px-4 py-2 text-white font-bold bg-amber-400 hover:bg-white hover:text-amber-400 transition ease-in-out">
                View Projects
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:h-1/2 h-1/3 flex mt-6">
          <Image src={img} width="494" height="236" alt="" />
        </div>
      </main>
    </>
  );
}
