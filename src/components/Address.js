import React from "react";

function Address({id, name, work, cell, address, email, edit, deletebtn}) {
  return (
    <tr id={id}>
      <td>{name}</td>
      <td>{work}</td>
      <td>{cell}</td>
      <td>{address}</td>
      <td>{email}</td>
      <td>{edit}</td>
      <td>{deletebtn}</td>
    </tr>
  );
}

export default Address;
