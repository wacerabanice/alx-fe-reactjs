const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export async function fetchGithubUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: API_KEY ? `Bearer ${API_KEY}` : undefined
    }
  });
  return response.json();
}
