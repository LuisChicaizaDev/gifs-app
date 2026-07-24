import { giphyApi } from '../api/giphy-api';
import type { GiphyResponse } from '../interfaces/giphy-response';
import type { Gif } from '../interfaces/gif-interface';

// Me devuelve una promesa que resuelve un array de Gif
export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  // Utilizamos axios para la petición, con un objeto de configuración
  const response = await giphyApi<GiphyResponse>('/search', {
    params: {
      q: query,
      limit: 10,
    },
  });

  // Transformamos toda la data de Giphy a cómo lo necesito en mi app
  return response.data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: Number(gif.images.original.width), //Transformamos a string a number porque definimos en la interface
    height: Number(gif.images.original.height),
  }));
};
