// src/layouts/AuthLayout.tsx
import { Outlet } from 'react-router-dom';
import type { JSX } from 'react/jsx-runtime';

export const AuthLayout = (): JSX.Element => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md border border-gray-200">
        {/* Aquí se renderizará el formulario de Login o Registro */}
        <Outlet />
      </div>
    </div>
  );
};