import { httpPost } from './httpClient';

/**
 * Send login credentials to the authentication service.
 *
 * @param {{identificacion: string, clave: string}} payload
 * @returns {Promise<{ok: boolean, status: number, data: any}>}
 */
export function loginRequest(payload) {
  return httpPost('/auth/login/', payload);
}

/**
 * Validate whether the current session is active.
 *
 * The payload can contain either a JWT or an identification string.
 * @param {{jwt?: string, identificacion?: string}} payload
 */
export function sessionStatusRequest(payload) {
  return httpPost('/auth/session-status/', payload);
}

/**
 * Invalidate a user's session at the authentication service.
 *
 * The payload can contain either a JWT or an identification string.
 * @param {{jwt?: string, identificacion?: string}} payload
 */
export function logoutRequest(payload) {
  return httpPost('/auth/logout/', payload);
}