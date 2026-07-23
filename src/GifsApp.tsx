import { CustomHeader } from './components/CustomHeader';
import { SearchBar } from './components/SearchBar';
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
      <PreviousSearches />

      {/* Gifs */}
      <section className="gifs-container">
        {mockGifs.map((gif) => (
          <div key={gif.id} className="gif-card">
            <img src={gif.url} alt={gif.title} />
            <h3> {gif.title} </h3>
            <p>
              {gif.width}x{gif.height} (1.5MB)
            </p>
          </div>
        ))}
      </section>
    </>
  );
};
