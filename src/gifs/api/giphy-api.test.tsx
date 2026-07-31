import { describe, expect, test } from 'vitest';
import { giphyApi } from './giphy-api';

describe('giphyApi', () => {
  test('should be configured correctly', () => {
    // Obtenemos los parametros de la instacia
    const params = giphyApi.defaults.params;

    console.log(params);

    // Comprobamos que la url sea correcta
    expect(giphyApi.defaults.baseURL).toBe('https://api.giphy.com/v1/gifs');
    expect(params.lang).toBe('es');
    expect(params.api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY);

    // Podemos compararlo de esta manera con el objeto params
    expect(params).toStrictEqual({
      lang: 'es',
      api_key: import.meta.env.VITE_GIPHY_API_KEY,
    });
  });
});
