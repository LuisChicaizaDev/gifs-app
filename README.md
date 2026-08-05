# 🚀 Gifs App

Aplicación web desarrollada con React, TypeScript y Vite para buscar GIFs usando la API de Giphy.

## Tecnologías

- React
- TypeScript
- Vite
- Axios
- Vitest
- Testing Library
- CSS3

## Funcionalidades

- Busca GIFs por palabra clave.
- Implementa un debounce de 700ms en la búsqueda.
- Guarda hasta 8 búsquedas previas y permite reutilizarlas.
- Usa una caché en memoria con `useRef` para evitar peticiones repetidas.
- Maneja errores de la API devolviendo una lista vacía cuando falla.

## Cómo ejecutar

```bash
npm install
npm run dev
```

## Tests

```bash
npm run test
npm run coverage
```

## 📝 Notas

- La clave de Giphy se configura mediante la variable de entorno `VITE_GIPHY_API_KEY`.
- El hook `useGifs` centraliza la lógica de búsquedas, caché y estado.
- El proyecto se mantiene simple y enfocado en la experiencia de búsqueda de GIFs.
