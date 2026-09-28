// src/router/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import type { JSX } from 'react/jsx-runtime';

interface ProtectedRouteProps {
  allowedRoles?: ('ADMIN' | 'USER')[];
}

export const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps): JSX.Element => {
  // 1. Verificamos la existencia del token de acceso en localStorage
  const token = localStorage.getItem('accessToken');

  // Si no hay token, redirigimos inmediatamente al Login (reemplazando el historial)
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // 2. Si definimos roles específicos (ej. ADMIN para /settings/users)
  if (allowedRoles && allowedRoles.length > 0) {
    // Obtenemos el usuario simulado o parseado del token
    const userRole = localStorage.getItem('userRole') as 'ADMIN' | 'USER' | null;

    if (!userRole || !allowedRoles.includes(userRole)) {
      // Si no tiene el rol necesario, redirige al Dashboard por defecto
      return <Navigate to="/dashboard" replace />;
    }
  }

  // Si pasa todas las verificaciones, rinde las rutas hijas (<Outlet />)
  return <Outlet />;
};