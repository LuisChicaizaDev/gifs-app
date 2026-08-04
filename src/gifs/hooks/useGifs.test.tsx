import { act, renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { useGifs } from './useGifs';

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
});
