import React from "react";
import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/mutation";
import { GET_CLIENTS } from "../queries/queries";
import { GET_PROJECT } from "../queries/projectQueries";

const ClientRow = ({ client }) => {
  const [deleteclient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECT }], // refetchQueries is used to refetch the data after the mutation is done

    // update(cache, { data: { deleteClient } }) {
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter((client) => client.id !== deleteClient.id),
    //     },
    //   });
    // },
  });
  return (
    <tr>
      <td>{client?.name}</td>
      <td>{client?.email}</td>
      <td>{client?.phone}</td>
      <button className="btn btn-danger btn-sm" onClick={deleteclient}>
        <FaTrash />
      </button>
    </tr>
  );
};

export default ClientRow;
