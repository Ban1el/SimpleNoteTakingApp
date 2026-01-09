const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const http = async (endpoint, options = {}) => {
  console.log(`${BASE_URL}${endpoint}`);
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    const error = await res.json();
    throw error;
  }

  return res.json();
};
