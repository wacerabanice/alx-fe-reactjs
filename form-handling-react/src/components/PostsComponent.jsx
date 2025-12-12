import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

const PostsComponent = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 60000, // 1 minute cache validity
  });

  if (isLoading) return <p className="text-center text-gray-500">Loading posts...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Posts (React Query)</h2>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          {isFetching ? "Updating..." : "Refetch"}
        </button>
      </div>

      <ul className="space-y-3">
        {data.map((post) => (
          <li key={post.id} className="p-3 border rounded shadow-sm bg-white">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
