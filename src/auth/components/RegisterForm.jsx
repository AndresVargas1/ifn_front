import { useState } from 'react';
import { registerRequest } from '../../api/authApi';
import { Link } from 'react-router-dom';

/**
 * Register form component.
 *
 * Renders a card with the IFN logo and inputs for a new user's data.
 * Uses Bootstrap classes to match the design of the login form.
 * Displays success or error messages based on the API response.
 */
export function RegisterForm() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [identificacion, setIdentificacion] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    const payload = { nombre, apellido, identificacion, clave };
    const { ok, data } = await registerRequest(payload);
    console.log(data);
    setLoading(false);

    if (!ok) {
      const message =
        data?.error ||
        data?.detail ||
        'Ocurrió un error al registrar el usuario. Intenta de nuevo.';
      setError(message);
      return;
    }

    // registration successful
    setSuccess('Usuario creado exitosamente. Ahora puedes iniciar sesión.');
    // clear form fields
    setNombre('');
    setApellido('');
    setIdentificacion('');
    setClave('');
  }

  return (
    <div className="card bg-white rounded-4 border border-secondary-subtle shadow-sm">
      <div className="card-header bg-transparent border-0 pt-4 text-center">
        <img src="/img/logoIFN.png" alt="IFN" style={{ height: '56px' }} />
        <h1 className="h5 mt-3 mb-0">Registro de usuario</h1>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="register-nombre">
              Nombre
            </label>
            <input
              id="register-nombre"
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="register-apellido">
              Apellido
            </label>
            <input
              id="register-apellido"
              type="text"
              className="form-control"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="register-identificacion">
              Identificación
            </label>
            <input
              id="register-identificacion"
              type="text"
              className="form-control"
              value={identificacion}
              onChange={(e) => setIdentificacion(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label className="form-label" htmlFor="register-clave">
              Contraseña
            </label>
            <input
              id="register-clave"
              type="password"
              className="form-control"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
              required
            />
          </div>
          {error && (
            <div className="text-danger small mb-3" role="alert">
              {error}
            </div>
          )}
          {success && (
            <div className="text-success small mb-3" role="alert">
              {success}
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? 'Registrando…' : 'Registrarse'}
          </button>
        </form>
        <div className="mt-3 text-center">
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
        </div>
      </div>
    </div>
  );
}