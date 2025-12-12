import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

function PostsComponent() {
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

    // React Query Config
    cacheTime: 1000 * 60 * 5,        // 5 minutes
    staleTime: 1000 * 30,            // 30 seconds
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error fetching posts: {error.message}</p>;

  return (
    <div>
      <h2>Posts Loaded Using React Query</h2>

      <button onClick={() => refetch()} style={{ marginBottom: "10px" }}>
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul>
        {data?.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: "8px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
