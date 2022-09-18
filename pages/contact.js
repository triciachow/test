import Image from "next/image";
import email from "../assets/email.svg";
import mobile from "../assets/mobile.svg";

export default function Contact() {
  return (
    <>
      <div className="h-full flex flex-col items-center gap-y-8">
        <h1 className="my-8 font-bold text-5xl text-amber-400 text-center">
          Hey! Thanks for viewing <br /> my portfolio.
        </h1>
        <div className="text-center font-bold">I&apos;m reachable via</div>
        <div className="flex flex-col xl:flex-row justify-center items-center gap-y-6 xl:gap-x-8">
          <div className="flex flex-col text-center gap-y-2">
            <Image src={email} width="226" height="186" alt="" />
            <div>suyeechow0212@gmail.com</div>
          </div>
          <div className="flex flex-col text-center gap-y-2">
            <Image src={mobile} width="355" height="185" alt="" />
            <div>9870 9649</div>
          </div>
        </div>
      </div>
    </>
  );
}
