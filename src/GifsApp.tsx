import { useState } from 'react';
import { CustomHeader } from './components/CustomHeader';
import { SearchBar } from './components/SearchBar';
import { GifsList } from './gifs/components/GifsList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { mockGifs } from './mock-data/gifs-mock';

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);

  const handlePreviousClicked = (term: string) => {
    console.log({ term });
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* Search */}
      <SearchBar placeholder="Busca un gif" />

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
