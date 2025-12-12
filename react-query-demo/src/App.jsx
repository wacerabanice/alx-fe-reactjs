import React, { useState } from "react";
import PostsComponent from "./components/PostsComponent";

export default function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-5xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">React Query Demo</h1>

          <button
            onClick={() => setShowPosts((prev) => !prev)}
            className="px-3 py-1 bg-indigo-600 text-white rounded"
          >
            {showPosts ? "Hide Posts" : "Show Posts"}
          </button>
        </header>

        {showPosts && <PostsComponent />}
      </div>
    </div>
  );
}
