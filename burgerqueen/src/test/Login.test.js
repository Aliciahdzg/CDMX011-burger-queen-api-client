/* eslint-disable jest/valid-expect */
/* eslint-disable prettier/prettier */
import React from 'react';
import {  screen, fireEvent, cleanup, render } from '@testing-library/react';
import FormLogin from '../components/FormLogin';

afterEach(cleanup);


test('user login', () => {
  const mockHandleLogin = jest.fn();

  render(<FormLogin handleLogin={mockHandleLogin}/>);
  const contentEmail = screen.getByPlaceholderText('Correo electrónico');
  const contentPassword = screen.getByPlaceholderText('Contraseña');
  const buttonLogin = screen.getByText('Iniciar Sesión')

  expect(contentEmail).toBeInTheDocument();
  expect(contentPassword).toBeInTheDocument();

  const emailValue= 'meseros@burger.com';
  const passwordValue = '12345678';

  fireEvent.change(contentEmail,{target:{value:emailValue}})
  fireEvent.change(contentPassword,{target:{value:passwordValue}})
  
  fireEvent.click( buttonLogin)


expect(mockHandleLogin).toHaveBeenCalledWith(emailValue, passwordValue)
});
