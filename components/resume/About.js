import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-y-4 justify-center items-center py-6 gap-x-4 border-b">
        <div className="font-bold h-full lg:w-2/12 w-full self-start">
          About Me
        </div>
        <div className="lg:w-8/12 w-full h-full flex flex-col gap-y-4">
          <p>
            A second year university student at Gold Smith, University of
            London. Seeing websites coming to live from a protoype makes me
            excited and it motivates to continue creating great things.
            Currently looking for frontend developer internship opportunities to
            learn and hone my skills. <br /> PS: Dog person 🐶, coffee drinker
            ☕️ and sometimes I run 🏃🏻‍♀️💨.
          </p>
          <div className="flex flex-col md:flex-row justify-around gap-4 p-4 border-amber-400 rounded-md bg-amber-100 text-amber-500 w-full lg:w-full h-auto drop-shadow-sm">
            <div>
              <small>Email</small>
              <p className="font-semibold">suyeechow0212@gmail.com</p>
            </div>
            <div>
              <small>Mobile</small>
              <p className="font-semibold">9870 9649</p>
            </div>
            <div>
              <small>Github</small>
              <Link href="https://github.com/triciachow">
                <p className="font-semibold">github.com/triciachow</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
