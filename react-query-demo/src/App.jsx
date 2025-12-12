// src/App.jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RegistrationForm from "./components/RegistrationForm";
import PostsComponent from "./components/PostsComponent";

// Create a single QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: "20px" }}>
        <h1>React Query Demo</h1>

        {/* Registration Form */}
        <RegistrationForm />

        <hr style={{ margin: "20px 0" }} />

        {/* Posts Fetching Component */}
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
