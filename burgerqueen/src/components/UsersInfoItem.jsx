/* eslint-disable react/prop-types */
import React from 'react';

import { Icon } from '@iconify/react';

function UsersInfoItem({ user }) {
  const { role, email } = user;
  return (
    <tr>
      <td>Agregar nombre</td>
      <td>{role}</td>
      <td>{email}</td>
      <td>
        <Icon icon="bx:bxs-edit" color="#f2884b" height="30" />
      </td>
      <td>
        <Icon icon="fluent:delete-24-filled" color="#f2884b" height="30" />
      </td>
    </tr>
  );
}

export default UsersInfoItem;
