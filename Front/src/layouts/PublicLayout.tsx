// src/layouts/PublicLayout.tsx
import { Outlet, Link, useNavigate } from 'react-router-dom';

 import type { ReactElement } from 'react';


export const PublicLayout = (): ReactElement => {
  const navigate = useNavigate();
  // Evaluamos si el usuario ya inició sesión
  const isAuthenticated = Boolean(localStorage.getItem('accessToken'));

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Navbar Pública Dinámica */}
      <header className="h-16 border-b border-gray-200 px-6 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold text-blue-600">
            CloudDrive Enterprise
          </Link>

          {/* Subpáginas públicas navegables sin importar si está logueado */}
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition">Inicio</Link>
            <Link to="/features" className="hover:text-blue-600 transition">Características</Link>
            <Link to="/about" className="hover:text-blue-600 transition">Acerca de</Link>
          </nav>
        </div>

        {/* Acciones dinámicas de usuario */}
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <button
              onClick={() => navigate('/dashboard')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
            >
              Ir a mi Workspace →
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 px-3 py-2"
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/login"
                className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Registrarse
              </Link>
            </>
          )}
        </div>
      </header>

      {/* Área donde se renderizan las páginas públicas */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer Público */}
      <footer className="border-t py-6 text-center text-sm text-gray-500">
        © 2026 CloudDrive Enterprise. Todos los derechos reservados.
      </footer>
    </div>
  );
};