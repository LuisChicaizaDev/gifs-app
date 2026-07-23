interface Props {
  searches: string[]; // Será un array de strings
}

export const PreviousSearches = ({ searches }: Props) => {
  return (
    <section className="previous-searches">
      <h2>Búsquedas previas</h2>
      <ul className="previous-searches-list">
        {searches.map((search) => (
          <li key={search}>{search}</li>
        ))}
      </ul>
    </section>
  );
};
