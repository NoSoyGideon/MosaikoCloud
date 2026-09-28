// src/layouts/MainLayout.tsx
import { Outlet, Link } from 'react-router-dom';
import type { ReactElement } from 'react';
import { useUIStore } from '@/store/useUIStore';

export const MainLayout = (): ReactElement => {
  // Leemos el estado del Sidebar desde el store global de Zustand
  const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-800">
      {/* Sidebar Lateral */}
      <aside
        className={`bg-slate-900 text-white transition-all duration-300 flex flex-col ${
          isSidebarOpen ? 'w-64' : 'w-16'
        }`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">
          {isSidebarOpen && <span className="font-bold text-lg">Cloud Drive</span>}
          <button
            onClick={toggleSidebar}
            className="p-1 rounded hover:bg-slate-800 text-gray-300"
          >
            {isSidebarOpen ? '◄' : '►'}
          </button>
        </div>

        <nav className="flex-1 p-2 space-y-2">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 p-2 rounded hover:bg-slate-800 transition"
          >
            📁 {isSidebarOpen && <span>Mi Unit / Drive</span>}
          </Link>
          <Link
            to="/shared"
            className="flex items-center gap-3 p-2 rounded hover:bg-slate-800 transition"
          >
            👥 {isSidebarOpen && <span>Compartido (Panas)</span>}
          </Link>
          <Link
            to="/settings/users"
            className="flex items-center gap-3 p-2 rounded hover:bg-slate-800 transition text-amber-400"
          >
            ⚙️ {isSidebarOpen && <span>Admin Usuarios</span>}
          </Link>
        </nav>
      </aside>

      {/* Área Principal de Contenido */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Navbar Superior */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <h1 className="font-semibold text-gray-700">Sistema de Gestión de Archivos</h1>
          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = '/login';
            }}
            className="text-sm bg-red-50 text-red-600 px-3 py-1.5 rounded hover:bg-red-100 font-medium"
          >
            Cerrar Sesión
          </button>
        </header>

        {/* Inyección de Páginas (<Outlet />) */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};