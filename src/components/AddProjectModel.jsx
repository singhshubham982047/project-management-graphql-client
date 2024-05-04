import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_CLIENTS } from "../queries/queries";
import { ADD_PROJECT } from "../mutations/mutation";
import { GET_PROJECT } from "../queries/projectQueries";
import { FaList } from "react-icons/fa";
import Spinner from "./Spinner";

const AddProjectModel = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("new");
  const [clientId, setClientId] = useState(data?.clients?.id);

  const [addProject] = useMutation(ADD_PROJECT, {
    variables: {
      name,
      description,
      status,
      clientId,
    },
    update(cache, { data: { addProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECT });
      cache.writeQuery({
        query: GET_PROJECT,
        data: { projects: [...projects, addProject] },
      });
    },
  });

  const submitHndler = (e) => {
    e.preventDefault();
    addProject(name, description, status, clientId);
    setName("");
    setDescription("");
    setStatus("new");
    setClientId("");
  };

  return (
    <>
      <button
        type="button"
        disabled={(loading, error)}
        className="btn btn-secondary mt-3"
        data-bs-toggle="modal"
        data-bs-target="#addProjectModel">
        <div className="d-flex align-items-center">
          <FaList className="icon" />
          <div>New Project</div>
        </div>
      </button>

      <div
        className="modal fade "
        id="addProjectModel"
        aria-labelledby="addProjectModelLabel"
        aria-hidden="true">
        <div className="modal-dialog ">
          <div className="modal-content bg-dark text-light">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addProjectModelLabel">
                Add Project
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitHndler}>
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
                <div className="mb-3">
                  <label htmlFor="clientId" className="form-label">
                    Client
                  </label>
                  <select
                    className="form-select bg-dark text-light"
                    id="clientId"
                    value={clientId}
                    onChange={(e) => setClientId(e.target.value)}
                    required>
                    <option value="">Select Client</option>
                    {data?.clients?.map((client) => (
                      <option key={client.id} value={client.id}>
                        {client.name}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProjectModel;
