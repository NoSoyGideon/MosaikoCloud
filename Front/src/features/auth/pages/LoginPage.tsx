import { Link, useNavigate } from 'react-router-dom';
import type { ReactElement } from 'react';
import { LoginForm } from '../components/LoginForm';
import type { LoginFormData } from '../schemas/loginSchema';

export const LoginPage = (): ReactElement => {
  const navigate = useNavigate();

  const handleLoginSubmit = (data: LoginFormData): void => {
    // Simulación de respuesta exitosa (Guarda Token y redirige)
    localStorage.setItem('accessToken', 'mock-jwt-token-xyz');
    localStorage.setItem('userRole', 'USER');
    navigate('/dashboard', { replace: true });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Bienvenido de nuevo</h2>
        <p className="text-sm text-gray-500 mt-1">Ingresa a tu cuenta de CloudDrive</p>
      </div>

      <LoginForm onSubmit={handleLoginSubmit} />

      <p className="text-xs text-center text-gray-600">
        ¿No tienes una cuenta?{' '}
        <Link to="/register" className="text-blue-600 font-semibold hover:underline">
          Regístrate aquí
        </Link>
      </p>
    </div>
  );
};