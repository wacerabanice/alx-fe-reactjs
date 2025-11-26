import React, { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setResults([]);

    try {
      const data = await searchUsers({ username, location, minRepos });
      setResults(data);
      if (data.length === 0) setError("No users match your criteria.");
    } catch (err) {
      setError("Something went wrong fetching data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Advanced GitHub User Search</h2>

      <form onSubmit={handleSearch} className="grid md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search by Username…"
          className="p-2 border rounded-md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location e.g. Nairobi"
          className="p-2 border rounded-md"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Min Repos"
          className="p-2 border rounded-md"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button
          type="submit"
          className="md:col-span-3 bg-blue-600 text-white py-2 rounded-md"
        >
          Search Users
        </button>
      </form>

      {loading && <p className="text-center mt-4 text-gray-500">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      {/* Results */}
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="p-4 border rounded-lg text-center shadow-sm"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 mx-auto rounded-full"
            />
            <h3 className="mt-2 font-semibold">{user.login}</h3>
            <a
              href={user.html_url}
              target="_blank"
              className="text-blue-600 underline text-sm"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
