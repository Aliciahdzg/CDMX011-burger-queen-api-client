/* eslint-disable jest/valid-expect */
/* eslint-disable prettier/prettier */
import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Login from '../components/Login';

afterEach(cleanup);
const mockHandleLogin = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockHandleLogin
}));

test('User login', () => {
  render(<Login handleLogin={mockHandleLogin} />);
  const contentEmail = screen.getByPlaceholderText('Correo electrónico');
  const contentPassword = screen.getByPlaceholderText('Contraseña');
  const buttonLogin = screen.getByText('Iniciar Sesión');

  expect(contentEmail).toBeInTheDocument();
  expect(contentPassword).toBeInTheDocument();

  const emailValue = 'meseros@burger.com';
  const passwordValue = '12345678';

  fireEvent.change(contentEmail, { target: { value: emailValue } });
  fireEvent.change(contentPassword, { target: { value: passwordValue } });
  fireEvent.click(buttonLogin);

  expect(mockHandleLogin).toHaveBeenCalledWith(emailValue, passwordValue);
});
