import React, { useState } from "react";
import PostsComponent from "./components/PostsComponent";

export default function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-5xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">React Query Demo</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setShowPosts((s) => !s)}
              className="px-3 py-1 bg-indigo-600 text-white rounded"
            >
              {showPosts ? "Hide Posts (simulate navigate away)" : "Show Posts (simulate return)"}
            </button>
          </div>
        </header>

        {/* Simulate some other content when posts are hidden */}
        {!showPosts && (
          <div className="p-6 bg-white rounded shadow">
            <p>You're away from the posts. Toggle the button to return and observe cache/network behavior.</p>
          </div>
        )}

        {showPosts && <PostsComponent />}
      </div>
    </div>
  );
}
