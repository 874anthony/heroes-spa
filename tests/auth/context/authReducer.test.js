import { authReducer } from '../../../src/auth/context/authReducer';
import { types } from '../../../src/auth/types/types';

const initialState = {
  logged: false,
};

const user = {
  id: 1,
  name: 'John Doe',
};

describe('Pruebas en el authReducer.js', () => {
  xtest('should retornar el estado por defecto', () => {
    const state = authReducer(initialState, {});

    expect(state).toEqual(initialState);
  });

  xtest('should llamar el login y establecer el user', () => {
    const action = {
      type: types.login,
      payload: user,
    };

    const state = authReducer(initialState, action);

    console.log(state);

    expect(state).toEqual({
      logged: true,
      user,
    });
  });

  xtest('should llamar el logout, borrar el user y setear el logged en false', () => {
    const action = { type: types.logout };

    const newState = authReducer(
      {
        logged: true,
        user,
      },
      action
    );

    expect(newState).toEqual({
      logged: false,
    });
  });
});
