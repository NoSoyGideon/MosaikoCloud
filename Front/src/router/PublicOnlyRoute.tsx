// src/router/PublicOnlyRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import type { JSX } from 'react/jsx-runtime';

export const PublicOnlyRoute = (): JSX.Element => {
  const token = localStorage.getItem('accessToken');

  // Si ya tiene sesión, lo enviamos directo al Dashboard de la app
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};