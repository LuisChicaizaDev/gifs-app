import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CustomHeader } from './CustomHeader';

// Usar screen para comprobar lo que ve el usuario
// Usar container solo para inspeccionar el DOM interno de forma más técnica.

describe('CustomHeader', () => {
  const title = 'Test title';

  test('should render the title correctly', () => {
    // Renderizamos el componente
    render(<CustomHeader title={title} />);

    // Mostramos por consola lo que renderiza el componente
    //screen.debug();

    // Comprobamos que concide el texto del title con lo que se renderiza
    expect(screen.getByText(title)).toBeDefined();
  });

  test('should render the description when provied', () => {
    const description = 'Test description';

    // Renderizamos el componente con el description
    render(<CustomHeader title={title} description={description} />);

    // Mostramos por consola lo que renderiza el componente
    //screen.debug();

    // Comprobamos que concide el texto del description con lo que se renderiza
    expect(screen.getByText(description)).toBeDefined();
    expect(screen.getByRole('paragraph')).toBeDefined();
    expect(screen.getByRole('paragraph').innerHTML).toBe(description);
  });

  test('should not render description when not provided', () => {
    const { container } = render(<CustomHeader title={title} />);

    //screen.debug();

    const divElement = container.querySelector('.content-center');
    const h1 = divElement?.querySelector('h1');

    // Comprobamos que el texto del h1 es igual al title
    expect(h1?.innerHTML).toBe(title);

    const p = divElement?.querySelector('p');

    // Comprobamos que el párrafo no exista o sea null
    expect(p).toBeNull();
  });
});
