import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

// Por ahora creamos componentes sencillos inline para probar


const NotFoundPage = () => <h1 className="p-4 text-2xl font-bold text-red-500">404 - No Encontrado</h1>;
// Layouts
import { PublicLayout } from '@/layouts/PublicLayout';
import { AuthLayout } from '@/layouts/AuthLayout';
import { MainLayout } from '@/layouts/MainLayout';

// Guards
import { ProtectedRoute } from './ProtectedRoute';
import { PublicOnlyRoute } from './PublicOnlyRoute';


// Public Pages
import { HomePage } from '@/features/public/pages/HomePage';
import { FeaturesPage } from '@/features/public/pages/FeaturesPage';
import { TestShowcasePage } from '@/features/public/pages/TestShowcasePage';

// Private Pages
import { LoginPage } from '@/features/auth/pages/LoginPage';
import { DashboardPage } from '@/features/drive/pages/DashboardPage';
import { SharedPage } from '@/features/social/pages/SharedPage';
import { AdminUsersPage } from '@/features/admin/pages/AdminUsersPage';

const router = createBrowserRouter([
  // -------------------------------------------------------------
  // 1. ZONA PÚBLICA (Accesible para Todos)[cite: 4]
  // -------------------------------------------------------------
  {
    element: <PublicLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/features', element: <FeaturesPage /> },
      { path: '/about', element: <div className="p-12 text-center text-xl font-bold">Acerca de Nosotros</div> },
      { path: '/prueba', element: <TestShowcasePage /> },
    ],
  },

  // -------------------------------------------------------------
  // 2. ZONA DE AUTENTICACIÓN (Solo si NO está logueado)
  // -------------------------------------------------------------
  {
    element: <PublicOnlyRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: '/login', element: <LoginPage /> },
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 3. ZONA PRIVADA DE LA APLICACIÓN (Requiere Token JWT)[cite: 4, 5]
  // -------------------------------------------------------------
  {
    element: <ProtectedRoute />, // Revisa existencia de Token[cite: 5]
    children: [
      {
        element: <MainLayout />, // Layout con Sidebar + Navbar de la App[cite: 4, 5]
        children: [
          { path: '/dashboard', element: <DashboardPage /> },
          { path: '/shared', element: <SharedPage /> },
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 4. ZONA ADMINISTRATIVA (Token JWT + Rol ADMIN)[cite: 5]
  // -------------------------------------------------------------
  {
    element: <ProtectedRoute allowedRoles={['ADMIN']} />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: '/settings/users', element: <AdminUsersPage /> },
        ],
      },
    ],
  },

  // Redirección ante ruta inexistente
  { path: '*', element: <Navigate to="/" replace /> },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};