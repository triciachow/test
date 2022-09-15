import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({ project }) {
  const { title, description, slug, thumbnail } = project.fields;

  return (
    <>
      <Link href={`/projects/${slug}`}>
        <div className="flex flex-col xl:w-4/12 gap-y-4 h-full rounded-lg bg-white drop-shadow-sm cursor-pointer">
          <Image
            src={`https:${thumbnail.fields.file.url}`}
            width={thumbnail.fields.file.details.image.width}
            height={thumbnail.fields.file.details.image.height}
            objectFit="contain"
            alt="Project image"
          />

          <div className="flex flex-col justify-between gap-y-2 px-4">
            <h2 className="font-bold">{title}</h2>
            <p>{description}</p>
            <button
              className="text-amber-400 font-bold py-2 flex gap-x-2"
              target="_blank"
            >
              View Project
              <ArrowRight />
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}
