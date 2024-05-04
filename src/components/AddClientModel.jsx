import { useMutation } from "@apollo/client";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { ADD_CLIENT } from "../mutations/mutation";
import { GET_CLIENTS } from "../queries/queries";

const AddClientModel = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [addClients] = useMutation(ADD_CLIENT, {
    variables: {
      name,
      email,
      phone,
    },
    update(cache, { data: { addClients } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClients] },
      });
    },
  });

  const submitHndler = (e) => {
    e.preventDefault();
    addClients(name, email, phone);
    setEmail("");
    setName("");
    setPhone("");
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary mt-3"
        data-bs-toggle="modal"
        data-bs-target="#addClientModel">
        <div className="d-flex align-items-center">
          <FaUser className="icon" />
          <div>Add Client</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="addClientModel"
        aria-labelledby="addClientModelLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addClientModelLabel">
                Client Info
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
                    className="form-control"
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
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

export default AddClientModel;
