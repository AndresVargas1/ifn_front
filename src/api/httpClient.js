/**
 * Simple HTTP client wrapper around the Fetch API.
 *
 * Reads the base API URL from environment variables. Each request
 * automatically sets the JSON Content-Type header and parses the
 * JSON response.
 */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

/**
 * Send a POST request with a JSON body.
 *
 * @param {string} path Relative path to append to the base API URL.
 * @param {object} body JSON payload to send.
 * @param {object} [options] Additional fetch options.
 * @returns {Promise<{ok: boolean, status: number, data: any}>}
 */
export async function httpPost(path, body, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    body: JSON.stringify(body),
    ...options,
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    // non-json responses will simply return null data
  }

  return {
    ok: response.ok,
    status: response.status,
    data,
  };
}