import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;
const BASE_URL = "https://api.github.com";


export async function fetchUserData(query) {
  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: query },
      headers: API_KEY
        ? { Authorization: `Bearer ${API_KEY}` }
        : undefined,
    });

    return response.data; // Contains { total_count, items: [...] }
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    throw error;
  }
}
