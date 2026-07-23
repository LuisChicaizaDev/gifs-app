import { CustomHeader } from './components/CustomHeader';
import { SearchBar } from './components/SearchBar';
import { GifsList } from './gifs/components/GifsList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { mockGifs } from './mock-data/gifs-mock';

export const GifsApp = () => {
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
      <PreviousSearches searches={['Gokú', 'Dragon Ball Z', 'Vegeta']} />

      {/* Gifs */}
      <GifsList gifs={mockGifs} />
    </>
  );
};
