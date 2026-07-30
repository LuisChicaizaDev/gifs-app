import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { GifsApp } from './GifsApp';

describe('GifsApp', () => {
  test('should render component properly', () => {
    const { container } = render(<GifsApp />);

    // Capturamos como está renderizado el componente
    expect(container).toMatchSnapshot();
  });
});
