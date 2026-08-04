import { act, renderHook } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { useGifs } from './useGifs';
import * as gifsActions from '../actions/get-gifs-by-query';

describe('useGifs', () => {
  test('should return default values and methods', () => {
    // Renderiza el hook
    const { result } = renderHook(() => useGifs());

    // Comprobamos el estado inicial es 0 gifs
    expect(result.current.gifs.length).toBe(0);
    expect(result.current.previousTerms.length).toBe(0);

    expect(result.current.handlePreviousClicked).toBeDefined();
    expect(result.current.handleSearch).toBeDefined();
  });

  test('should return a list of gifs', async () => {
    const { result } = renderHook(() => useGifs());

    // Llamamos la función handleSearch, dentro de 'act' porque se produce un cambio de estado
    // Y con await porque es un método asíncrono
    await act(async () => {
      await result.current.handleSearch('goku');
    });

    //console.log(result.current);

    // Comprabamos que me devuelve un array de 10
    expect(result.current.gifs.length).toBe(10);
  });

  test('should return a list of gifs when handlePreviousClicked is called', async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handlePreviousClicked('goku');
    });

    expect(result.current.gifs.length).toBe(10);
  });

  test('should return a list of gifs from cache', async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handlePreviousClicked('goku');
    });

    expect(result.current.gifs.length).toBe(10);

    // Sobrescribimos el método, espiando el objeto gifActions y el método getGifsByQuery
    vi.spyOn(gifsActions, 'getGifsByQuery').mockRejectedValue(
      new Error('Esto es un error')
    );

    await act(async () => {
      await result.current.handlePreviousClicked('goku');
    });

    expect(result.current.gifs.length).toBe(10);
  });

  test('should return no mote than 8 previous terms', async () => {
    const { result } = renderHook(() => useGifs());

    // Sobrescribimos el método, espiando el objeto gifActions y el método getGifsByQuery
    vi.spyOn(gifsActions, 'getGifsByQuery').mockResolvedValue([]);

    await act(async () => {
      await result.current.handleSearch('goku1');
    });
    await act(async () => {
      await result.current.handleSearch('goku2');
    });
    await act(async () => {
      await result.current.handleSearch('goku3');
    });
    await act(async () => {
      await result.current.handleSearch('goku4');
    });
    await act(async () => {
      await result.current.handleSearch('goku5');
    });
    await act(async () => {
      await result.current.handleSearch('goku6');
    });
    await act(async () => {
      await result.current.handleSearch('goku7');
    });
    await act(async () => {
      await result.current.handleSearch('goku8');
    });
    await act(async () => {
      await result.current.handleSearch('goku9');
    });

    expect(result.current.previousTerms).toStrictEqual([
      'goku9',
      'goku8',
      'goku7',
      'goku6',
      'goku5',
      'goku4',
      'goku3',
      'goku2',
    ]);
  });
});
