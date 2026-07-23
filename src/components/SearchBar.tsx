import { useState } from 'react';
// Parametrizamos el componente
interface Props {
  placeholder?: string;

  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = 'Buscar', onQuery }: Props) => {
  // Controlamos el estado del input
  const [query, setQuery] = useState('');

  // Controlamos la búsqueda introducida
  const handleSearch = () => {
    onQuery(query);
    //setQuery('');
  };

  // Se declara el tipo de dato del evento
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </section>
  );
};
