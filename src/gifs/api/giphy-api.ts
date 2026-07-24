import axios from 'axios';

//Centralimos las peticiones get a la api en un solo sitio
export const giphyApi = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    lang: 'es',
    api_key: import.meta.env.VITE_GIPHY_API_KEY, // Importamos la api key de la variable de entorno
  },
});
