import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

/**
 * Fetch GitHub users with advanced search criteria
 * @param {string} username - GitHub username
 * @param {string} location - optional location filter
 * @param {number} minRepos - optional minimum repos filter
 */
export async function fetchUserData({ username, location, minRepos }) {
  try {
    // Build the query string
    let query = `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    
    const url = `https://api.github.com/search/users?q=${query}`;

    // Axios GET request
    const response = await axios.get(url, {
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
