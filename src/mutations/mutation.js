import { gql } from "@apollo/client";

const DELETE_CLIENT = gql`
  mutation DeleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

const ADD_CLIENT = gql`
  mutation AddClients($name: String!, $email: String!, $phone: String!) {
    addClients(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

const ADD_PROJECT = gql`
  mutation addProjects(
    $name: String!
    $description: String!
    $status: ProjectStatus!
    $clientId: ID!
  ) {
    addProject(
      name: $name
      description: $description
      status: $status
      clientId: $clientId
    ) {
      name
      id
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

const UPDATE_PROJECT = gql`
  mutation UpdateProjects(
    $id: ID!
    $name: String!
    $description: String!
    $status: ProjectStatusUpdate!
  ) {
    updateProject(
      id: $id
      name: $name
      description: $description
      status: $status
    ) {
      name
      id
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

const DELETE_PROJECT = gql`
  mutation DeleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

export {
  DELETE_CLIENT,
  ADD_CLIENT,
  ADD_PROJECT,
  DELETE_PROJECT,
  UPDATE_PROJECT,
};
