import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Post from "./pages/Post.jsx";
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import BlogPost from "./pages/BlogPost.jsx"; // import BlogPost

export default function App() {
  return (
    <BrowserRouter>
      <div className="p-6">
        <nav className="mb-4">
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/profile" className="mr-4">Profile</Link>
          <Link to="/blog/123">Blog Post Example</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/post/:postId" element={<Post />} />
          
          {/* Dynamic blog route */}
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
