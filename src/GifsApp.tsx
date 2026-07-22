import { mockGifs } from "./mock-data/gifs-mock";

export const GifsApp = () => {
    return (
        <>
        {/*Header*/}
        <section className="content-center">
            <h1>Buscador de Gifs</h1>
            <p>Descubre y comparte el gif perfecto</p>
        </section>

        {/* Search */}
        <section className="search-container">
            <input type="text" placeholder="Buscar gif" />
            <button>Buscar</button>
        </section>

        {/* Búsquedas previas */}
        <section className="previous-searches">
            <h2>Búsquedas previas</h2>
            <ul className="previous-searches-list">
                <li>Goku</li>
                <li>Saitama</li>
                <li>Elden Ring</li>
            </ul>
        </section>

        {/* Gifs */}
        <section className="gifs-container">
            {
                mockGifs.map( (gif) => (
                    <div key={gif.id} className="gif-card">
                        <img src={gif.url} alt={gif.title} />
                        <h3> { gif.title } </h3>
                        <p>
                             {gif.width }x{ gif.height } (1.5MB)
                        </p>
                    </div>
                ))
            }
        </section>

        </>
    );
}