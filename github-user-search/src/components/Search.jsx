import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError("");
    setUsers([]);

    try {
      // Build query string for GitHub Search API
      let query = `${username}`;
      if (location) query += `+location:${location}`;
      if (minRepos) query += `+repos:>=${minRepos}`;

      const data = await fetchUserData(query);
      if (data.items && data.items.length > 0) {
        setUsers(data.items);
      } else {
        setError("No users found matching your criteria");
      }
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mt-10">
      <form onSubmit={handleSearch} className="flex flex-col gap-2 md:flex-row md:items-end md:gap-4">
        <div className="flex-1 flex flex-col">
          <label className="text-sm font-medium">Username</label>
          <input
            type="text"
            placeholder="Enter GitHub username..."
            className="p-2 border rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex-1 flex flex-col">
          <label className="text-sm font-medium">Location</label>
          <input
            type="text"
            placeholder="Enter location..."
            className="p-2 border rounded-md"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="flex-1 flex flex-col">
          <label className="text-sm font-medium">Min Repos</label>
          <input
            type="number"
            placeholder="0"
            className="p-2 border rounded-md"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2 md:mt-0"
        >
          Search
        </button>
      </form>

      {loading && (
        <p className="text-center text-gray-600 mt-4">Loading...</p>
      )}

      {error && (
        <p className="text-center text-red-500 mt-4">{error}</p>
      )}

      {users.length > 0 && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {users.map((user) => (
            <div key={user.id} className="bg-gray-100 p-4 rounded-lg text-center shadow-sm">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-20 h-20 mx-auto rounded-full"
              />
              <h2 className="text-lg font-bold mt-2">{user.login}</h2>
              {user.location && <p className="text-sm text-gray-500">{user.location}</p>}
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline mt-1 inline-block"
              >
                Visit GitHub Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
