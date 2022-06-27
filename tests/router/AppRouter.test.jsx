import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';

describe('Pruebas en <AppRouter />', () => {
  xtest('should mostrar el login si no esta autenticado', () => {
    const contextValue = {
      logged: false,
    };

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Login')).toBeTruthy();
    // screen.debug();
  });

  xtest('should mostrar el componente de marvel si esta autenticado', () => {
    const contextValue = {
      logged: true,
      user: {
        id: 'abc123',
        name: '874anthony',
      },
    };

    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
    // screen.debug();
  });
});
