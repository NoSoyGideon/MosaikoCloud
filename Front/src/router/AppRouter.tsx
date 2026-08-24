import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Por ahora creamos componentes sencillos inline para probar
const HomePage = () => <h1 className="p-4 text-2xl font-bold">Página de Inicio</h1>;
const LoginPage = () => <h1 className="p-4 text-2xl font-bold">Login</h1>;
const NotFoundPage = () => <h1 className="p-4 text-2xl font-bold text-red-500">404 - No Encontrado</h1>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};