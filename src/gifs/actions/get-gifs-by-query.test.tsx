import { describe, expect, test } from 'vitest';
import AxiosMockAdapter from 'axios-mock-adapter';

import { getGifsByQuery } from './get-gifs-by-query';
import { giphySearchResponseMock } from '../../../test/mocks/giphy-response-data';
import { giphyApi } from '../api/giphy-api';

describe('getGifsByQuery', () => {
  // Llamanos a una instacia del mock
  // https://www.npmjs.com/package/axios-mock-adapter
  const mock = new AxiosMockAdapter(giphyApi);

  /* test('should return a list of gifs', async () => {
    const gifs = await getGifsByQuery('goku');
    const [gif1] = gifs;

    expect(gifs.length).toBe(10);

    expect(gif1).toStrictEqual({
      id: expect.any(String),
      height: expect.any(Number),
      width: expect.any(Number),
      title: expect.any(String),
      url: expect.any(String),
    });
  }); */

  test('should return a list of gifs', async () => {
    // Se hace una petición del get a /search
    // Los argumentos para la respuesta son (estado, datos, encabezados).
    mock.onGet('/search').reply(200, giphySearchResponseMock);

    const gifs = await getGifsByQuery('goku');

    expect(gifs.length).toBe(10);

    // Comprobamos el tipo de dato de cada propiedad
    gifs.forEach((gif) => {
      expect(typeof gif.id).toBe('string');
      expect(typeof gif.title).toBe('string');
      expect(typeof gif.url).toBe('string');
      expect(typeof gif.width).toBe('number');
      expect(typeof gif.height).toBe('number');
    });
  });
});
