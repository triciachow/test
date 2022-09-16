import { createClient } from "contentful";
import Image from "next/image";
import ProjectCard from "../components/projects/ProjectCard";
import img from "../assets/projects.svg";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "portfolioProjects" });

  return {
    props: {
      projects: res.items,
    },
    revalidate: 1,
  };
}

export default function ProjectsPage({ projects }) {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center gap-10 w-4/5 py-6 mx-auto relative">
        {projects.map(project => {
          return <ProjectCard key={project.sys.id} project={project} />;
        })}
      </div>
      <div className="absolute -bottom-20 -left-10 -z-10 opacity-50">
        <Image src={img} width="600" height="640" alt="Project image" />
      </div>
    </>
  );
}
