interface Props {
  searches: string[]; // Será un array de strings

  onLabelClicked: (term: string) => void; // Obtenemos el texto del término clicado
}

export const PreviousSearches = ({ searches, onLabelClicked }: Props) => {
  return (
    <section className="previous-searches">
      <h2>Búsquedas previas</h2>
      <ul className="previous-searches-list">
        {searches.map((search) => (
          <li key={search} onClick={() => onLabelClicked(search)}>
            {search}
          </li>
        ))}
      </ul>
    </section>
  );
};
