// Parametrizamos el componente
interface Props {
  placeholder?: string;
}

export const SearchBar = ({ placeholder = 'Buscar' }: Props) => {
  return (
    <section className="search-container">
      <input type="text" placeholder={placeholder} />
      <button>Buscar</button>
    </section>
  );
};
