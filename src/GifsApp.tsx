import { useState } from 'react';
import { CustomHeader } from './components/CustomHeader';
import { SearchBar } from './components/SearchBar';
import { GifsList } from './gifs/components/GifsList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { mockGifs } from './mock-data/gifs-mock';
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query';

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);

  const handlePreviousClicked = (term: string) => {
    console.log({ term });
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

    console.log(gifs);
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* Search */}
      <SearchBar placeholder="Busca un gif" onQuery={handleSearch} />

      {/* Búsquedas previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handlePreviousClicked}
      />

      {/* Gifs */}
      <GifsList gifs={mockGifs} />
    </>
  );
};
