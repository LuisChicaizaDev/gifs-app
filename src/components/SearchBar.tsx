import { useEffect, useState } from 'react';
// Parametrizamos el componente
interface Props {
  placeholder?: string;

  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = 'Buscar', onQuery }: Props) => {
  // Controlamos el estado del input
  const [query, setQuery] = useState('');

  /*Implementamos nuestro propio Debounce sin paquetes de terceros
    Se espera 700ms hasta que el usuario deja de escribir 
  */
  // El efecto se dispera inmediatamente al mostarse el componente
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);

    // La función de limpieza se dispara cada que se desmota el componente y cada que se dispara la función de callback
    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]); // Si alguna de esas dependencias cambia, el efecto se vuelve a ejecutar y reinicia el temporizador

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
