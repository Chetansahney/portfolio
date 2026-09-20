import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  // Keeps module ids inside the project root when the folder is reached
  // through a junction/symlink, which Windows AppData paths often are.
  resolve: { preserveSymlinks: true },
  server: { fs: { strict: false } },
});
