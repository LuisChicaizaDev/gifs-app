import { useState } from 'react';
import type { Gif } from '../interfaces/gif-interface';
import { getGifsByQuery } from '../actions/get-gifs-by-query';

// Custom Hook
export const useGifs = () => {
  // Indicamos el tipo de dato que guardamos, un array de objetos tipo Gif
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handlePreviousClicked = async (term: string) => {
    // Pasamos la query para hacer la petición
    const gifs = await getGifsByQuery(term);

    setGifs(gifs);
  };

  // Controlamos la consulta del usuario
  const handleSearch = async (query: string) => {
    query = query.trim().toLowerCase();

    if (query === '') return;

    // Comprobamos que el termino no existe anteriormente
    if (previousTerms.includes(query)) return;

    // Agregamos el término al inicio y recortamos el array a 8 elementos
    setPreviousTerms([query, ...previousTerms].splice(0, 8));

    // Pasamos la query para hacer la petición
    const gifs = await getGifsByQuery(query);

    // Actualizamos el estado con los gifs que vienen de la petición
    setGifs(gifs);
  };

  return {
    // Props
    gifs,
    previousTerms,

    // Methods
    handlePreviousClicked,
    handleSearch,
  };
};
