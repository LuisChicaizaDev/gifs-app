import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  test('should render search bar with values default', () => {
    // Renderizamos el componente y como parámetro pasamos cualquier función en onQuery
    const { container } = render(<SearchBar onQuery={() => {}} />);

    expect(container).toMatchSnapshot();
    expect(screen.getByRole('textbox')).toBeDefined();
    expect(screen.getByRole('button')).toBeDefined();
  });

  test('should call onQuery with the correct value aftes 700ms', async () => {
    // Para saber cuando ha sido llamado y con qué valores creo un mock
    const onQuery = vi.fn();

    render(<SearchBar onQuery={onQuery} />);

    const input = screen.getByRole('textbox');

    // Disparamos un evento con el valor del test en el input
    fireEvent.change(input, { target: { value: 'test' } });

    // Espera a que se ejecuté el código y se evalúe
    await waitFor(() => {
      expect(onQuery).toHaveBeenCalled();
      expect(onQuery).toHaveBeenCalledWith('test');
    });
  });

  test('should call only once with the last value (debounce)', async () => {
    // Para saber cuando ha sido llamado y con qué valores creo un mock
    const onQuery = vi.fn();

    render(<SearchBar onQuery={onQuery} />);

    const input = screen.getByRole('textbox');

    // Disparamos un evento con el valor del test en el input
    fireEvent.change(input, { target: { value: 't' } });
    fireEvent.change(input, { target: { value: 'te' } });
    fireEvent.change(input, { target: { value: 'tes' } });
    fireEvent.change(input, { target: { value: 'test' } });

    // Espera a que se ejecuté el código y se evalúe
    await waitFor(() => {
      expect(onQuery).toHaveBeenCalledTimes(1);
      expect(onQuery).toHaveBeenCalledWith('test');
    });
  });

  test('should call onQuery when button clicked with the input value', () => {
    const onQuery = vi.fn();

    render(<SearchBar onQuery={onQuery} />);

    const input = screen.getByRole('textbox');

    // Disparamos un evento con el valor del input
    fireEvent.change(input, { target: { value: 'test' } });

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(onQuery).toHaveBeenCalledTimes(1);
    expect(onQuery).toHaveBeenCalledWith('test');
  });

  test('should the input has the correct placeholder value', () => {
    const placeholder = 'Buscar test';
    render(<SearchBar onQuery={() => {}} placeholder={placeholder} />);

    //screen.debug();

    // Comprobams que el placeholder contiene ese valor
    expect(screen.getByPlaceholderText(placeholder)).toBeDefined();
  });
});
