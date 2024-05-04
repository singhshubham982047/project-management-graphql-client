import { useQuery } from "@apollo/client";
import { GET_SINGLE_PROJECT } from "../queries/projectQueries";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import ClientInfo from "../components/ClientInfo";
import DeleteProjectButton from "../components/DeleteProjectButton";
import EditProjectForm from "../components/EditProjectForm";

const ProjectDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_SINGLE_PROJECT, {
    variables: { id },
  });

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <div className="mx-auto w-75 card p-5 bg-dark text-light">
      <Link to={"/"} className="btn btn-light btn-sm w-25 d-inline ms-auto">
        back
      </Link>
      <h1>{data?.project?.name}</h1>
      <p>{data?.project?.description}</p>
      <h5 className="mt-3">Project Status</h5>
      <p className="lead">{data?.project?.status}</p>

      <ClientInfo client={data?.project?.client} />
      <div className="d-flex flex-column gap-3  align-items-center mt-5">
        <EditProjectForm project={data?.project} />

        <DeleteProjectButton projectId={data?.project?.id} />
      </div>
    </div>
  );
};

export default ProjectDetail;
