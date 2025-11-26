const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;
import axios from "axios";

export async function fetchUserData(username) {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: API_KEY ? `Bearer ${API_KEY}` : undefined
    }
  });
  return response.json();
}
