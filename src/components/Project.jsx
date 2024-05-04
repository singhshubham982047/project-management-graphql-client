import { useQuery } from "@apollo/client";
import Spinner from "./Spinner";
import { GET_PROJECT } from "../queries/projectQueries";
import ProjectCard from "./ProjectCard.jsx";

const Project = () => {
  const { loading, error, data } = useQuery(GET_PROJECT);
  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="mt-3 row">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Project;
