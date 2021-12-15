/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import Select from 'react-select';

import { Icon } from '@iconify/react';

const FormUser = ({ handleRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [rol, setRol] = useState('');

  const options = [
    { value: 'waiter', label: 'Mesero' },
    { value: 'chef', label: 'Cocina' },
    { value: 'admin', label: 'Administrador' }
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      width: 173,
      borderBottom: '1px solid orange',
      color: state.isSelected ? 'red' : 'blue'
    })
  };

  return (
    <div>
      <form>
        <input
          type="email"
          placeholder="Correo electrónico"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Confirmar contraseña"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <Select
          styles={customStyles}
          options={options}
          onChange={(e) => {
            setRol(e.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            handleRegister(email, password, confirmPassword, rol);
          }}
        >
          <Icon
            icon="akar-icons:circle-plus-fill"
            color="#f2884b"
            height="30"
          />
        </button>
      </form>
    </div>
  );
};
export default FormUser;
