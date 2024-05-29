// src/lib/auth.js
/**
 * @param {any} email
 * @param {any} password
 */
export async function authenticate(email, password) {
  // Replace this URL with your Cloudflare Worker URL
  const workerUrl = 'https://auth-worker.umut3a5.workers.dev';

  // Replace this with your actual token or credentials logic
  const authToken = 'my-secret-token';

  const response = await fetch(workerUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  if (response.status === 200) {
    return true; // Authenticated successfully
  } else {
    return false; // Authentication failed
  }
}

export async function register(email, password) {
  // Replace this URL with your Cloudflare Worker URL
  const workerUrl = 'https://344-project-backend.belphegor.workers.dev/user_credentials';

  // Replace this with your actual token or credentials logic
  const authToken = 'my-secret-token';

  const response = await fetch(workerUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "email": email, "password": password })
  });

  if (response.status === 200) {
    return true; // Authenticated successfully
  } else {
    return false; // Authentication failed
  }
}