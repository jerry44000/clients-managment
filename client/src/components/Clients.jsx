import React from "react";
import { gql, useQuery } from "@apollo/client";
import ClientRow from "./ClientRow.jsx";

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;


const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Sorry, something went wrong 😕 </p>;

  return <>
  {!loading && !error && 
  <table className="table table-hover mt-3">
    <thead>
        <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th></th>
        </tr>
    </thead>
    <tbody>
        {data.clients.map(client => (
            <ClientRow key={client.id} client={client}/>
        ))}
    </tbody>
  </table>
  }</>;
};

export default Clients;
