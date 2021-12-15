/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const FormUsers = ({ handleRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
        <select>
          <option hidden selected>
            Selecciona Rol
          </option>
          <option value="waiter">Mesero</option>
          <option value="chef">Cocina</option>
          <option value="admin">Administrador</option>
        </select>
        <button
          type="button"
          onClick={() => {
            handleRegister(email, password, confirmPassword);
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
