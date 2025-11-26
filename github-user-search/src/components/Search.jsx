import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!username) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          className="flex-1 p-2 border rounded-md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
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

      {user && (
        <div className="mt-6 text-center">
          <img
            src={user.avatar_url}
            alt="avatar"
            className="w-24 h-24 mx-auto rounded-full"
          />

          <h2 className="text-xl font-bold mt-2">{user.login}</h2>

          <a
            href={user.html_url}
            target="_blank"
            className="text-blue-600 underline"
          >
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
