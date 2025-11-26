import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export async function searchUsers({ username, location, minRepos }) {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos} `;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}`,
    {
      headers: {
        Authorization: API_KEY ? `Bearer ${API_KEY}` : undefined,
      },
    }
  );

  return response.data.items; // GitHub returns results in "items"
}

export async function fetchUserData(username) {
  const response = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: API_KEY ? `Bearer ${API_KEY}` : undefined,
    },
  });

  return response.data;
}
