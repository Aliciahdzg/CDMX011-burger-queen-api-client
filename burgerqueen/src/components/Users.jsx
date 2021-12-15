import React from 'react';

import Swal from 'sweetalert2';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import FormUsers from './FormUsers';
import auth from '../firebase/firebaseConfig';

const handleRegister = async (email, password, confirmPassword) => {
  if (password !== confirmPassword) {
    Swal.fire({
      title: 'Error!',
      text: 'Contraseñas no coinciden',
      icon: 'warning',
      confirmButtonText: 'Aceptar'
    });
  } else {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('me registreee');
      Swal.fire({
        title: 'Registro Exitoso!',
        text: 'Se ha registrado nuevo usuario',
        icon: 'succed',
        confirmButtonText: 'Aceptar'
      });
    } catch (error) {
      console.log(error);
    }
  }
};

const Users = () => (
  <div className="users-container">
    <FormUsers handleRegister={handleRegister} />
  </div>
);

export default Users;
