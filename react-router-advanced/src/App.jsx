import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Post from "./pages/Post.jsx";
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <div className="p-6">
      <nav className="mb-4">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Route Example */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic Route */}
        <Route path="/post/:postId" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
