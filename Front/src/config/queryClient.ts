// src/config/queryClient.ts
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Los datos se consideran "frescos" durante 5 minutos
      gcTime: 1000 * 60 * 15,    // La caché inactiva se conserva por 15 minutos (Garbage Collection)
      refetchOnWindowFocus: false, // Evita re-pedir datos a la API cada vez que el usuario cambia de pestaña
      retry: 1,                  // En caso de fallo de red, solo reintenta 1 vez antes de marcar error
    },
    mutations: {
      retry: 0,                  // Las mutaciones (POST/PUT/DELETE) no se reintentan automáticamente
    },
  },
});