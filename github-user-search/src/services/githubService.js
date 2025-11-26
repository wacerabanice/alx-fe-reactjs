import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;
const BASE_URL = "https://api.github.com/search/users";

/**
 * Fetch GitHub users with advanced search criteria.
 * @param {string} username - GitHub username to search
 * @param {string} location - User location (optional)
 * @param {number} minRepos - Minimum number of public repos (optional)
 * @returns {Promise<Object>} - API response containing users
 */
export async function fetchUserData({ username, location, minRepos }) {
  try {
    
    let query = `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    // Axios GET request to GitHub Search API
    const response = await axios.get(`${BASE_URL}`, {
      params: { q: query },
      headers: API_KEY
        ? { Authorization: `Bearer ${API_KEY}` }
        : undefined,
    });

    return response.data; // { total_count, items: [...] }
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    throw error;
  }
}
