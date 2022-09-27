export default function Title() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-y-4 justify-center items-center py-6 mt-6 gap-x-4">
        <div className="font-bold h-full lg:w-2/12 w-full self-start"></div>
        <div className="lg:w-8/12 w-full h-full flex flex-col gap-y-4">
          <h1 className="font-poppins font-bold text-5xl mb-8">
            Hello, I&apos;m{" "}
            <span className="text-sky-600">
              Tricia
            </span>
            🙋🏻‍♀️
          </h1>
          <div className="flex flex-col gap-y-2 text-xl">
            <h3>👩🏻‍💻 Aspiring frontend developer.</h3>
            <h3>
              📚 Currently a computer science student in University of London.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
