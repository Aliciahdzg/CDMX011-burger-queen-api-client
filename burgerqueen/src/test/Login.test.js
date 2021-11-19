import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../components/Login';

test('User login', () => {
  render(<Login />);
  const contentEmail = screen.getByPlaceholderText('Correo electrónico');
  const contentPassword = screen.getByPlaceholderText('Contraseña');

  expect(contentEmail).toBeInTheDocument();
  expect(contentPassword).toBeInTheDocument();
});
