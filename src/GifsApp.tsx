import { CustomHeader } from './components/CustomHeader';
import { SearchBar } from './components/SearchBar';
import { GifsList } from './gifs/components/GifsList';
import { PreviousSearches } from './gifs/components/PreviousSearches';

import { useGifs } from './gifs/hooks/useGifs';

export const GifsApp = () => {
  // Desestrucutamos el objeto devuelto del custom hook
  const { gifs, previousTerms, handlePreviousClicked, handleSearch } =
    useGifs();

  return (
    <div>
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
      <GifsList gifs={gifs} />
    </div>
  );
};
