import Image from "next/image";
import email from "../assets/email.svg";

export default function Contact() {
  return (
    <>
      <div className="h-full flex flex-col items-center gap-y-8">
        <h1 className="my-8 font-bold text-5xl text-sky-600 text-center">
          Hey! Thanks for viewing <br /> my portfolio.
        </h1>
        <div className="text-center font-bold">I&apos;m reachable via</div>
        <div className="flex flex-col text-center gap-y-6">
          <Image src={email} width="226" height="186" alt="" />
          <div>suyeechow0212@gmail.com</div>
        </div>
      </div>
    </>
  );
}
