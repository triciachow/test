import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
// import img from "../assets/404.svg";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, [router]);

  return (
    <>
      <div className="flex flex-col items-center gap-y-4 py-8">
        <picture>
          <img src="/404.svg" width={600} height={400} alt="404 error" />
        </picture>
        <h2 className="text-5xl font-bold my-4">
          Ooopsss... That page can&apos;t be found.
        </h2>
        <p>
          Redirecting to <Link href="/">home</Link> in a few seconds!
        </p>
      </div>
    </>
  );
}
