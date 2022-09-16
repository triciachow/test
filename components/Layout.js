import Head from "next/head";
import Link from "next/link";

const navItems = ["resume", "projects", "contact"];

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Tricia C.</title>
      </Head>
      <header className="flex justify-between items-center h-24 font-bold mx-8 mb-4 xl:mx-24 border-b border-slate-200">
        <Link href="/">Tricia C.</Link>
        <div className="flex gap-x-10">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="hover:text-amber-400 transition ease-in-out capitalize"
            >
              <Link href={`/${item}`}>{item}</Link>
            </div>
          ))}
        </div>
      </header>
      <div className="mx-8 xl:mx-24 h-full">{children}</div>
    </>
  );
}
