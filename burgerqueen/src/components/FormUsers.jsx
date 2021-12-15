/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Select from 'react-select';

import './styles/Users.scss';

const FormUsers = ({ handleRegister }) => {
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
      borderBottom: '1px solid orange',
      color: state.isSelected ? 'red' : 'blue',
      width: 173
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    }
  };
  return (
    <div className="users-form">
      <form>
        <input
          type="email"
          placeholder="Correo Electronico"
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
          placeholder="Confirmar Contraseña"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <Select
          options={options}
          styles={customStyles}
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

export default FormUsers;
