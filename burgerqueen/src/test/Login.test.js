/* eslint-disable jest/valid-expect */
/* eslint-disable prettier/prettier */
import React from 'react';
import { screen, fireEvent, cleanup, render } from '@testing-library/react';
import FormLogin from '../components/FormLogin';

afterEach(cleanup);

describe('Login component', () => {
  const mockHandleLogin = jest.fn();
  const contentEmail = screen.getByPlaceholderText('Correo electrónico');
  const contentPassword = screen.getByPlaceholderText('Contraseña');
  const buttonLogin = screen.getByText('Iniciar Sesión');

  test('should render login form', () => {
    render(<FormLogin handleLogin={mockHandleLogin} />);

    expect(contentEmail).toBeInTheDocument();
    expect(contentPassword).toBeInTheDocument();
  });
  test('user login', () => {
    const emailValue = 'meseros@burger.com';
    const passwordValue = '12345678';

    fireEvent.change(contentEmail, { target: { value: emailValue } });
    fireEvent.change(contentPassword, { target: { value: passwordValue } });
    fireEvent.click(buttonLogin);

    expect(mockHandleLogin).toHaveBeenCalledWith(emailValue, passwordValue);
  });
});
