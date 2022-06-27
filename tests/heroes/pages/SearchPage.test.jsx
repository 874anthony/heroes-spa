import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('Pruebas en <SearchPage />', () => {
  beforeEach(() => jest.clearAllMocks());

  xtest('should mostrar correctamente con valores por defecto', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();

    // screen.debug();
  });

  xtest('should mostrar a batman y el input con el valor del queryString', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    const img = screen.getByRole('img');
    const alert = screen.getByLabelText('alert-danger');

    expect(input.value).toBe('batman');
    expect(img.src).toContain('/assets/heroes/dc-batman.jpg');
    expect(alert.style.display).toBe('none');

    // screen.debug();
  });

  xtest('should mostrar un error si no se encuentra el hero', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <SearchPage />
      </MemoryRouter>
    );

    const alert = screen.getByLabelText('alert-danger');
    expect(alert.style.display).toBeFalsy();
  });

  xtest('should llamar el navigate a la pantalla nueva', () => {
    const inputValue = 'flash';

    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    const form = screen.getByLabelText('form');

    fireEvent.change(input, { target: { name: 'searchText', value: inputValue } });
    fireEvent.submit(form);

    expect(mockUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);
  });
});
