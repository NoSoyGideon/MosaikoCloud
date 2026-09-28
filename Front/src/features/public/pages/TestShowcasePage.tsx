// src/features/public/pages/TestShowcasePage.tsx
import { useState } from 'react';
import type { ReactElement } from 'react';
import { useUIStore } from '@/store/useUIStore';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Checkbox } from '@/components/ui/Checkbox';
import { Modal } from '@/components/ui/Modal';

export const TestShowcasePage = (): ReactElement => {
  // Estado Global UI (Zustand) para Tema[cite: 1, 3]
  const theme = useUIStore((state) => state.theme);
  const toggleTheme = useUIStore((state) => state.toggleTheme);

  // Estados Locales para prueba interactiva
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkboxState, setCheckboxState] = useState(true);
  const [selectValue, setSelectValue] = useState('opcion1');

  return (
    <div className={`min-h-screen p-8 transition-colors duration-300 ${theme === 'dark' ? 'dark bg-slate-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* CABECERA CON CONMUTADOR DE MODO OSCURO / CLARO */}
        <div className="flex justify-between items-center border-b pb-6 border-gray-200 dark:border-slate-800">
          <div>
            <h1 className="text-3xl font-extrabold">🎨 Design System Showcase & Componentes UI</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Ruta de prueba: <code className="bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded">/prueba</code></p>
          </div>
          <Button onClick={toggleTheme} variant="outline">
            {theme === 'light' ? '🌙 Cambiar a Modo Oscuro' : '☀️ Cambiar a Modo Claro'}
          </Button>
        </div>

        {/* 1. SECCIÓN BOTONES */}
        <section className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 space-y-4">
          <h2 className="text-xl font-bold border-b pb-2 border-gray-100 dark:border-slate-800">1. Botones (Variants & Sizes)</h2>
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="primary" isLoading>Loading</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
          <div className="flex flex-wrap gap-3 items-center pt-2">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        {/* 2. SECCIÓN INPUTS & ENTRYS */}
        <section className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 space-y-4">
          <h2 className="text-xl font-bold border-b pb-2 border-gray-100 dark:border-slate-800">2. Inputs, Selects & Checks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Campo Normal" placeholder="Escribe algo aquí..." />
            <Input label="Campo con Error" placeholder="tu@correo.com" error="El correo ingresado no es válido" />
            
            {/* Checkbox */}
            <div className="flex items-center gap-4 pt-4">
              <Checkbox
                label="Acepto los términos de prueba"
                checked={checkboxState}
                onChange={(e) => setCheckboxState(e.target.checked)}
              />
            </div>

            {/* Select predeterminado */}
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Select Predeterminado</label>
              <select
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                className="px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-gray-900 dark:text-white"
              >
                <option value="opcion1">Opción 1: Archivo .rar</option>
                <option value="opcion2">Opción 2: Documento PDF</option>
                <option value="opcion3">Opción 3: Imagen PNG</option>
              </select>
            </div>
          </div>
        </section>

        {/* 3. SECCIÓN CARDS & BORDES */}
        <section className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 space-y-4">
          <h2 className="text-xl font-bold border-b pb-2 border-gray-100 dark:border-slate-800">3. Cards & Estilos de Bordes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg border border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-800/50">
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300">Default</span>
              <h3 className="font-bold mt-2">Card Estándar</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Sombra leve y bordes suaves.</p>
            </div>

            <div className="p-4 rounded-lg border-2 border-dashed border-blue-400 dark:border-blue-600 bg-blue-50/50 dark:bg-blue-950/20 text-center">
              <h3 className="font-bold text-blue-600 dark:text-blue-400">Área Dropzone (Subida)</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Arrastra archivos aquí (Límite 1 GB)</p>
            </div>

            <div className="p-4 rounded-lg border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/20">
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-300">Alerta</span>
              <h3 className="font-bold text-red-700 dark:text-red-400 mt-1">Cuota Excedida</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Has alcanzado el límite de 10 GB.</p>
            </div>
          </div>
        </section>

        {/* 4. SECCIÓN MODALES */}
        <section className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 space-y-4">
          <h2 className="text-xl font-bold border-b pb-2 border-gray-100 dark:border-slate-800">4. Modales Reutilizables</h2>
          <Button onClick={() => setIsModalOpen(true)}>Abrir Modal de Prueba</Button>

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Modal de Ejemplo">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Este es un modal reutilizable con overlay difuminado. Puedes cerrarlo con la equis o con acciones inferiores.
            </p>
            <div className="flex justify-end gap-2">
              <Button variant="secondary" onClick={() => setIsModalOpen(false)}>Cancelar</Button>
              <Button onClick={() => setIsModalOpen(false)}>Confirmar</Button>
            </div>
          </Modal>
        </section>

      </div>
    </div>
  );
};