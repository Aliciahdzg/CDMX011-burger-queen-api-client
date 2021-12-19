import React from 'react';

import Swal from 'sweetalert2';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import FormUsers from './FormUsers';
import InfoUsers from './InfoUsers';

import auth, { db } from '../firebase/firebaseConfig';

const Users = () => {
  const handleRegister = async (email, password, confirmPassword, rol) => {
    if (password !== confirmPassword) {
      Swal.fire({
        title: 'Error!',
        text: 'Contraseñas no coinciden',
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
        console.log('me registreee');
        Swal.fire({
          title: 'Registro Exitoso!',
          text: 'Se ha registrado nuevo usuario',
          icon: 'succes',
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
      <InfoUsers />
    </div>
  );
};

export default Users;
