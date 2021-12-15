/* eslint-disable react/prop-types */
import React from 'react';

function UsersInfoItem({ user }) {
  const { id, role, email } = user;
  return (
    <div>
      <p>{id}</p>
      <p>{role}</p>
      <p>{email}</p>
    </div>
  );
}

export default UsersInfoItem;
