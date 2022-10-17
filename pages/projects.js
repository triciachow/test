import { createClient } from "contentful";
import ProjectCard from "../components/projects/ProjectCard";

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
      <div className="grid justify-items-center md:flex md:justify-center gap-10 w-full py-6 mx-auto min-h-screen flex-wrap">
        {projects.map(project => {
          return <ProjectCard key={project.sys.id} project={project} />;
        })}
      </div>
    </>
  );
}
