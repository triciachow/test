import Head from "next/head";
import Link from "next/link";

const navItems = ["projects", "contact"];

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Tricia C.</title>
      </Head>
      <header className="flex justify-between items-center h-24 font-bold mx-6 xl:mx-24 border-b border-slate-200">
        <div className="hover:text-sky-600 transition ease-in-out">
          <Link href="/">Tricia C.</Link>
        </div>

        <div className="flex gap-x-10">
          {navItems.map((item, index) => {
            return (
              <div
                key={index}
                className="hover:text-sky-600 transition ease-in-out capitalize"
              >
                <Link href={`/${item}`}>{item}</Link>
              </div>
            );
          })}
        </div>
      </header>

      <div className="mx-6 xl:mx-24 h-full">{children}</div>
    </>
  );
}
