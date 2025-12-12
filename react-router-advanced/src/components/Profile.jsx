import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "../pages/ProfileDetails.jsx";
import ProfileSettings from "../pages/ProfileSettings.jsx";

export default function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav className="mb-4">
        <Link to="details" className="mr-4">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
        <Route path="/" element={<p>Please select a section above.</p>} />
      </Routes>
    </div>
  );
}
