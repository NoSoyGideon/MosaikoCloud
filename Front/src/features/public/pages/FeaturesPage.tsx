
 import type { ReactElement } from 'react';


export const FeaturesPage = (): ReactElement => (
  <div className="max-w-4xl mx-auto py-12 px-4">
    <h2 className="text-3xl font-bold mb-4">Características Principales</h2>
    <ul className="space-y-4 text-gray-600">
      <li className="p-4 bg-gray-50 rounded-lg border">📂 10 GB de almacenamiento constante.</li>
      <li className="p-4 bg-gray-50 rounded-lg border">🚀 Subida masiva y descargas empaquetadas en ZIP[cite: 4].</li>
      <li className="p-4 bg-gray-50 rounded-lg border">👥 Módulo de Panas con permisos personalizados[cite: 4].</li>
    </ul>
  </div>
);