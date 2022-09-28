import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({ project }) {
  const { title, description, slug, thumbnail } = project?.fields;

  return (
    <>
      <Link href={`/projects/${slug}`}>
        <div className="flex flex-col w-[320px] h-[380px] rounded-lg drop-shadow-sm cursor-pointer border border-slate-200 hover:border-slate-400 dark:hover:border-sky-600 transition ease-in-out">
          <Image
            src={`https:${thumbnail?.fields?.file?.url}`}
            width={thumbnail?.fields?.file?.details?.image?.width}
            height={thumbnail?.fields?.file?.details?.image?.height}
            objectFit="cover"
            className="rounded-t-lg"
            alt="Project image"
          />

          <div className="flex flex-col justify-between gap-y-2 px-4 mt-4">
            <h2 className="font-bold">{title}</h2>
            <p>{description}</p>
            <button className="text-sky-600 font-bold flex gap-x-2 content-end">
              View Project
              <ArrowRight />
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}
