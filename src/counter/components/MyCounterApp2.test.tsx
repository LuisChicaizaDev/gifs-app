import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { MyCounterApp } from './MyCounterApp';
//import { useCounter } from '../hooks/useCounter';

// Para hacer referencia a las funciones anónimas y apuntar esas funciones
const handleAddMock = vi.fn();
const handleSubtractMock = vi.fn();
const handleResetMock = vi.fn();

/* 
    Se realizará un mock completo del custom hook useCounter,
    el cual se importa y se utiliza en este componente
    Se simula un componente con los valores establecidos a continuación
*/
vi.mock('../hooks/useCounter', () => ({
  useCounter: () => ({
    counter: 30,
    handleAdd: handleAddMock,
    handleSubtract: handleSubtractMock,
    handleReset: handleResetMock,
  }),
}));

describe('MyCounterApp', () => {
  test('should render the component', () => {
    render(<MyCounterApp />);

    //screen.debug();

    // Comprobamos que renderice un h1 con el texto
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      'Counter: 30'
    );

    // Comprobamos los botones con su texto correspondiente
    expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
    expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
  });

  test('should call handleAdd if button is clicked', () => {
    render(<MyCounterApp />);

    const button = screen.getByRole('button', { name: '+1' });

    // Disparamos el evento
    fireEvent.click(button);

    // Comprobamos que el handleAdd sea llamado
    expect(handleAddMock).toHaveBeenCalled();
    expect(handleAddMock).toHaveBeenCalledTimes(1);
    expect(handleSubtractMock).not.toHaveBeenCalled();
    expect(handleResetMock).not.toHaveBeenCalled();
  });
});
