import React from 'react';

import Swal from 'sweetalert2';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import FormUsers from './FormUsers';
import InfoUsers from './InfoUsers';

import auth, { db } from '../firebase/firebaseConfig';

import './styles/Users.scss';

const Users = () => {
  const handleRegister = async (email, password, confirmPassword, rol) => {
    if (password !== confirmPassword) {
      Swal.fire({
        title: 'Error!',
        text: 'Contraseñas no coinciden',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
    } else if (!rol.includes('mesero', 'cocinero', 'administrador')) {
      Swal.fire({
        title: 'Error!',
        text: 'Falta elegir el rol',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
    } else {
      try {
        const infoUsuario = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        ).then((usuarioFirebase) => usuarioFirebase);
        const docuRef = doc(db, `users/${infoUsuario.user.uid}`);
        setDoc(docuRef, { email, role: rol });
        Swal.fire({
          title: 'Registro Exitoso!',
          text: 'Se ha registrado nuevo usuario',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="users-container">
      <FormUsers handleRegister={handleRegister} />
      <table className="usersData">
        <tr>
          <th>NOMBRE</th>
          <th>ROL</th>
          <th>EMAIL</th>
        </tr>
        <InfoUsers />
      </table>
    </div>
  );
};

export default Users;
