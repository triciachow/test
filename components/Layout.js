import Head from "next/head";
import Link from "next/link";
import Toggle from "./ThemeToggle";

const navItems = ["projects", "contact"];

export default function Layout({ children }) {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-gray-300 transition-all min-h-screen">
      <Head>
        <title>Tricia C.</title>
      </Head>
      <header className="flex justify-between items-center h-24 font-bold mx-6 xl:mx-24">
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
          <Toggle />
        </div>
      </header>

      <div className="mx-6 xl:mx-24 h-full">{children}</div>
      <script
        type="text/javascript"
        src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
        id="aisensy-wa-widget"
        widget-id="Fs2tBt"
        defer
      />
    </div>
  );
}
