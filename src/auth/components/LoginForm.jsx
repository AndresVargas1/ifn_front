import { useState } from 'react';
import { loginRequest } from '../../api/authApi';
import { useAuth } from '../context/AuthContext';

/**
 * Login form component.
 *
 * Renders a card with the IFN logo, username and password inputs and
 * a submit button. Uses Bootstrap classes to match the provided design.
 * Displays errors returned from the API.
 */
export function LoginForm() {
  const [identificacion, setIdentificacion] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setLoading(true);

    const { ok, data } = await loginRequest({
      identificacion,
      clave,
    });

    setLoading(false);

    if (!ok) {
      const message =
        data?.detail ||
        data?.error ||
        'Credenciales inválidas. Verifica tu usuario y contraseña.';
      setError(message);
      return;
    }

    // When successful, data should contain jwt and maybe other fields.
    login({ jwt: data.jwt, identificacion });
    // TODO: navigate to another page (dashboard) after login
  }

  return (
    <div className="card bg-white rounded-4 border border-secondary-subtle shadow-sm">
      <div className="card-header bg-transparent border-0 pt-4 text-center">
        <img src="/img/logoIFN.png" alt="IFN" style={{ height: '56px' }} />
        <h1 className="h5 mt-3 mb-0">Ingreso</h1>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="login-identificacion">
              Usuario
            </label>
            <input
              id="login-identificacion"
              type="text"
              className="form-control"
              placeholder="jefe1 o tecnico1"
              value={identificacion}
              onChange={(e) => setIdentificacion(e.target.value)}
              autoComplete="username"
              required
            />
          </div>
          <div className="mb-2">
            <label className="form-label" htmlFor="login-password">
              Contraseña
            </label>
            <input
              id="login-password"
              type="password"
              className="form-control"
              placeholder="••••••"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>
          {error && (
            <div className="text-danger small mb-3" role="alert">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? 'Entrando…' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}