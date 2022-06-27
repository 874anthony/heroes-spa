// import useNavigate
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    login('Anthony Acosta');

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>LoginPage</h1>
      <hr />

      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};
