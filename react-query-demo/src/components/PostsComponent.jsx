import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};

export default function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    // optional: override options here if desired
    // staleTime: 1000 * 30,
  });

  if (isLoading) return <div className="p-4">Loading posts...</div>;
  if (isError) return <div className="p-4 text-red-600">Error: {error.message}</div>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Posts (React Query)</h2>
        <div className="flex gap-2 items-center">
          <button
            onClick={() => refetch()}
            className="px-3 py-1 bg-blue-600 text-white rounded"
          >
            {isFetching ? "Updating..." : "Refetch"}
          </button>
        </div>
      </div>

      <ul className="space-y-3">
        {data.map((post) => (
          <li key={post.id} className="p-3 border rounded bg-white shadow-sm">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
