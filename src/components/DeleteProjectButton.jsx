import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DELETE_PROJECT } from "../mutations/mutation";
import { GET_PROJECT } from "../queries/projectQueries";

const DeleteProjectButton = ({ projectId }) => {
  const navigate = useNavigate();
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECT }],
  });

  return (
    <button className="btn btn-danger " onClick={deleteProject}>
      <FaTrash className="icon" />
      Delete Project
    </button>
  );
};

export default DeleteProjectButton;
