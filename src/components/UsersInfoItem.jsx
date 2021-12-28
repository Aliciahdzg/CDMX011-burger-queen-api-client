/* eslint-disable react/prop-types */
import React from 'react';

function UsersInfoItem({ user }) {
  const { id, role, email } = user;
  return (
    <tr>
      <td>{id}</td>
      <td>{role}</td>
      <td>{email}</td>
    </tr>
  );
}

export default UsersInfoItem;
