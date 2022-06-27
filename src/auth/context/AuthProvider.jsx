import { useReducer } from 'react';
import { types } from '../types/types';

import { AuthContext } from './';
import { authReducer } from './';

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (name = '') => {
    const user = { id: 'ABC', name };
    const action = { type: types.login, payload: user };

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem('user');
    dispatch({ type: types.logout });
  };

  return <AuthContext.Provider value={{ ...authState, login, logout }}>{children}</AuthContext.Provider>;
};
