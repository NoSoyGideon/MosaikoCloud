// src/App.tsx
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './config/queryClient';
import { AppRouter } from './router/AppRouter';
import type { JSX } from 'react/jsx-runtime';

export default function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}