import { useMutation } from "@apollo/client";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { DELETE_PROJECT, UPDATE_PROJECT } from "../mutations/mutation";
import { GET_SINGLE_PROJECT } from "../queries/projectQueries";

const EditProjectForm = ({ project }) => {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState("");

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: {
      id: project.id,
      name,
      description,
      status,
    },
    refetchQueries: [
      { query: GET_SINGLE_PROJECT, variables: { id: project.id } },
    ],
  });

  const submitHandler = (e) => {
    e.preventDefault();
    updateProject(name, description, status);
    setDescription("");
    setName("");
  };
  return (
    <div className="">
      <button
        type="button"
        className="btn btn-secondary "
        data-bs-toggle="modal"
        data-bs-target="#updateProjectModel">
        <div className="d-flex align-items-center">
          <FaEdit className="icon" />
          <div>Update Project</div>
        </div>
      </button>
      <div
        className="modal fade "
        id="updateProjectModel"
        aria-labelledby="updateProjectModelLabel"
        aria-hidden="true">
        <div className="modal-dialog ">
          <div className="modal-content bg-dark text-light">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="updateProjectModelLabel">
                Update Project
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    className="form-control bg-dark text-light "
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control bg-dark text-light"
                    rows="3"
                    name="description"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="status" className="form-label">
                    Status
                  </label>
                  <select
                    className="form-select bg-dark text-light"
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required>
                    <option value="new">Not Started</option>
                    <option value="progress">In-Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProjectForm;
