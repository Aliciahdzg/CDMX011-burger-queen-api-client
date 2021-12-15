/* eslint-disable react/prop-types */
import React from 'react';

const InfoUsersItem = ({ user }) => {
  // eslint-disable-next-line no-unused-vars
  const { id, rol, email } = user;

  return (
    <div>
      <p>Aqui van los datos de los usuarios</p>
    </div>
  );
};

export default InfoUsersItem;
