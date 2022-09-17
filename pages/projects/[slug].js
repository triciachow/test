import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Keywords from "../../components/projects/Keywords";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { BLOCKS } from "@contentful/rich-text-types";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "portfolioProjects" });
  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "portfolioProjects",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { project: items[0] },
    revalidate: 1,
  };
}

const renderOption = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <div className="w-full ">
          <Image
            src={`https:${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt="Project images"
          />
        </div>
      );
    },
  },
};

export default function ProjectDetails({ project }) {
  if (!project)
    return <div className="text-center mt-8">Fetching project details...</div>;

  const {
    featuredImage,
    keywords,
    title,
    description,
    fullDetails,
    githubLink,
    deployedLink,
  } = project.fields;

  return (
    <>
      <div className="lg:w-8/12 xl:w-6/12 mx-auto py-6">
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
          alt="Project image"
        />

        <div className="flex gap-x-4">
          {keywords.map((keyword, index) => {
            return <Keywords key={index} keyword={keyword} />;
          })}
        </div>

        <div className="flex flex-col gap-y-4">
          <h1 className="text-5xl font-bold my-6">Project Title: {title}</h1>
          <p>Description: {description}</p>
          <h2 className="text-xl font-bold">Project Overview</h2>
          <div className="flex flex-col gap-y-2">
            {documentToReactComponents(fullDetails, renderOption)}
          </div>
        </div>
        <div className="flex gap-x-8">
          <Link href={githubLink}>
            <button className="my-8 flex justify-center items-center gap-x-2 border-2 border-amber-400 rounded-md px-4 py-2 text-amber-400 font-bold hover:bg-amber-400 hover:text-white">
              View on Github <Github />
            </button>
          </Link>
          {deployedLink && (
            <Link href={deployedLink}>
              <button className="my-8 flex justify-center items-center gap-x-2 border-2 border-amber-400 rounded-md px-4 py-2 text-amber-400 font-bold hover:bg-amber-400 hover:text-white">
                View live website <ExternalLink />
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
