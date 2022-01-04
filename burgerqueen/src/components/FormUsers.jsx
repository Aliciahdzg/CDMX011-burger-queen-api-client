/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { Icon } from '@iconify/react';

// import './styles/Users.scss';

const FormUsers = ({ handleRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rol, setRol] = useState('');

  return (
    <div className="users-form">
      <div className="register-form">
        <h3>Agregar Usuario</h3>
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
          <select
            className="custome-select"
            onBlur={(e) => {
              const selectedRol = e.target.value;
              setRol(selectedRol);
            }}
          >
            <option selected value="0">
              Elige el rol...
            </option>
            <option value="administrador">Administrador</option>
            <option value="mesero">Mesero</option>
            <option value="cocinero">Cocina</option>
          </select>
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
    </div>
  );
};

export default FormUsers;
