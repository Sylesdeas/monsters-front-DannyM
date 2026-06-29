const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

function buildUrl(path) {
  return `${API_BASE_URL}${path}`;
}

function unwrapData(payload) {
  return payload?.data ?? payload;
}

export async function apiRequest(path, fallbackValue) {
  try {
    const response = await fetch(buildUrl(path));

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    return unwrapData(data);
  } catch (error) {
    if (fallbackValue !== undefined) {
      return fallbackValue;
    }

    throw error;
  }
}
