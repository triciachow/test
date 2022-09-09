import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tricia C.</title>
        <meta name="description" content="Tricia's personal portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="font-poppins font-bold">Hello, I'm Tricia</h1>
        <h3>👩🏻‍💻 Aspiring frontend developmer.</h3>
        <h3>
          📚 Currently a computer science student in University of London.
        </h3>
      </main>
    </div>
  );
}
