import { Link } from 'react-router-dom';


 import type { ReactElement } from 'react';


export const HomePage = (): ReactElement => (
  <div className="max-w-4xl mx-auto py-16 px-4 text-center">
    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
      Almacena y comparte tus archivos con seguridad total
    </h1>
    <p className="text-lg text-gray-600 mb-8">
      Tu nube privada de 10 GB con sincronización en tiempo real y permisos para tu equipo.
    </p>
    <div className="flex justify-center gap-4">
      <Link
        to="/login"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition"
      >
        Comenzar Ahora Gratis
      </Link>
      <Link
        to="/features"
        className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium text-lg hover:bg-gray-200 transition"
      >
        Saber Más
      </Link>
    </div>
  </div>
);