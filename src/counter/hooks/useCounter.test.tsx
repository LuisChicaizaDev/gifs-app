import { act, renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  test('should initialize with default value of 10', () => {
    // Renderiza el hook en un componente para comprobarlo en el test
    const { result } = renderHook(() => useCounter());

    // Comprueba que el hook inicia con el valor por defecto de 10
    expect(result.current.counter).toBe(10);
  });

  test('should initialize with value 20', () => {
    const initialValue = 20;
    const { result } = renderHook(() => useCounter(initialValue));

    // Comprueba que el hook inicia con un valor de 20
    expect(result.current.counter).toBe(initialValue);
  });

  test('should increment counter when handleAdd is called', () => {
    const { result } = renderHook(() => useCounter());

    // Llamamos la función de incrementar, dentro de 'act' porque se produce un cambio de estado
    act(() => {
      result.current.handleAdd();
    });

    // Comprobamos que incrementa el counter
    expect(result.current.counter).toBe(11);
  });

  test('should decrement counter when handleSubtract is called', () => {
    const { result } = renderHook(() => useCounter());

    // Llamamos la función de decrementar, dentro de 'act' porque se produce un cambio de estado
    act(() => {
      result.current.handleSubtract();
    });

    // Comprobamos que decrementa el counter
    expect(result.current.counter).toBe(9);
  });

  test('should reset initialValue the counter when handleReset is called', () => {
    const { result } = renderHook(() => useCounter());

    // Cambiamos el estado incremetando el valor inicial
    act(() => {
      result.current.handleAdd();
      result.current.handleAdd();
      result.current.handleAdd();
      result.current.handleAdd();
      result.current.handleAdd();
    });

    //console.log({ counter: result.current.counter });

    expect(result.current.counter).toBe(15);

    act(() => {
      result.current.handleReset();
    });

    // Comprobamos que resetea el counter al valor inicial 10
    expect(result.current.counter).toBe(10);
  });
});
