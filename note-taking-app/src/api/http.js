const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const http = async (endpoint, options = {}) => {
  // Create fetch options first
  const fetchOptions = { ...options, headers: { ...(options.headers || {}) } };

  // Only set Content-Type if body exists
  if (fetchOptions.body !== undefined) {
    fetchOptions.headers["Content-Type"] = "application/json";
  }

  // Always add Accept header
  fetchOptions.headers["Accept"] = "application/json";

  const res = await fetch(`${BASE_URL}${endpoint}`, fetchOptions);

  let data = null;
  const text = await res.text();
  if (text) {
    try {
      data = JSON.parse(text);
    } catch (err) {
      console.warn("Response is not JSON", err);
    }
  }

  return {
    status: res.status,
    ok: res.ok,
    statusText: res.statusText,
    data,
  };
};
