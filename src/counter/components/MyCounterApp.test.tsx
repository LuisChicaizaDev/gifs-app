import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { MyCounterApp } from './MyCounterApp';

describe('MyCounterApp', () => {
  test('should render the component with default values', () => {
    // Renderizamos
    render(<MyCounterApp />);

    //screen.debug();

    // Comprobamos que renderice un h1 con el texto
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(
      'Counter: 0'
    );

    // Comprobamos los botones con su texto correspondiente
    expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
    expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
  });

  test('should increment the counter', () => {
    render(<MyCounterApp />);

    const labeH1 = screen.getByRole('heading', { level: 1 });
    const button = screen.getByRole('button', { name: '+1' });

    // Disparamos el evento clic de incrementar
    fireEvent.click(button);

    // Comprobamos que el titulo cambie a counter 1
    expect(labeH1.innerHTML).toContain('Counter: 1');
  });

  test('should decrement the counter', () => {
    render(<MyCounterApp />);

    const labeH1 = screen.getByRole('heading', { level: 1 });
    const button = screen.getByRole('button', { name: '-1' });

    // Disparamos el evento clic de incrementar
    fireEvent.click(button);

    // Comprobamos que el titulo cambie a counter -1
    expect(labeH1.innerHTML).toContain('Counter: -1');
  });
});
