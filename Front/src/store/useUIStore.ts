// src/store/useUIStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
  // Estado del Sidebar
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  setSidebarOpen: (isOpen: boolean) => void;

  // Estado del Tema (Modo Oscuro/Claro)
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      // Valores Iniciales
      isSidebarOpen: true,
      theme: 'light',

      // Acciones para alterar el estado
      toggleSidebar: (): void =>{
        set((state) => ({ isSidebarOpen: !state.isSidebarOpen }));
      },

      setSidebarOpen: (isOpen: boolean): void =>{
        set({ isSidebarOpen: isOpen })},

      toggleTheme: (): void =>{
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        }))},
    }),
    {
      name: 'ui-storage', // Nombre clave en localStorage
    }
  )
);