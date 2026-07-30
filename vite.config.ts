// import { defineConfig } from 'vite'
import { defineConfig } from 'vitest/config'; // config para los test de componentes
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  // config para los test de componentes
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
