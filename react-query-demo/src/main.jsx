import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // tune these to see caching behavior
      staleTime: 1000 * 60, // 1 minute before considered stale
      cacheTime: 1000 * 60 * 5, // keep cache for 5 minutes
      refetchOnWindowFocus: false, // avoid auto refetch when switching tabs
    },
  },
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} /> {/* optional */}
    </QueryClientProvider>
  </React.StrictMode>
);
