import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Tricia C.</title>
      </Head>
      <header className="flex justify-between items-center h-24 font-bold mx-8 mb-4 xl:mx-24 border-b border-slate-200">
        <Link href="/">Tricia C.</Link>
        <div className="flex gap-x-10">
          <div className="hover:text-amber-400 transition ease-in-out">
            <Link href="/resume">Resume</Link>
          </div>
          <div className="hover:text-amber-400 transition ease-in-out">
            <Link href="/projects">Projects</Link>
          </div>
          <div className="hover:text-amber-400 transition ease-in-out">
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </header>
      <div className="mx-8 xl:mx-24 h-full">{children}</div>
      {/* <footer className="text-slate-400 p-8 text-center">
        <small className="">Developed by Tricia Chow</small>
      </footer> */}
    </>
  );
}
