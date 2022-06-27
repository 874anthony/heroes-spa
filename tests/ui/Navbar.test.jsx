import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../src/auth';

import { Navbar } from '../../src/ui';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('Pruebas en el <Navbar />', () => {
  const contextValue = {
    logged: true,
    user: {
      id: 'abc123',
      name: '874anthony',
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  xtest('should mostrar el nombre de la persona en el navbar', () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const { innerHTML: username } = screen.getByLabelText('user-span');

    expect(username).toEqual(contextValue.user.name);
    // screen.debug();
  });

  xtest('should llamar el logout y navigate cuando se hace click en el button', () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const button = screen.getByText('Logout');
    fireEvent.click(button);

    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
    // screen.debug();
  });
});
