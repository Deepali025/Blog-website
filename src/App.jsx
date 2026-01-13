/**
 * App.jsx - Main Application Component
 * 
 * This is the root component that sets up the routing structure for the entire application.
 * It uses React Router to handle client-side navigation between different pages.
 * 
 * Features:
 * - BrowserRouter for clean URLs without hash
 * - Persistent Navbar and Footer across all pages
 * - Dynamic routing with URL parameters for blog details and editing
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Page Components
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar visible on all pages */}
      <Navbar />

      {/* Main content area - changes based on route */}
      <Routes>
        {/* Home page - displays latest blogs */}
        <Route path="/" element={<Home />} />

        {/* All blogs page - with search and filter */}
        <Route path="/blogs" element={<Blogs />} />

        {/* Individual blog details - dynamic route with :id parameter */}
        <Route path="/blogs/:id" element={<BlogDetails />} />

        {/* Create new blog form */}
        <Route path="/create" element={<CreateBlog />} />

        {/* Edit existing blog - dynamic route with :id parameter */}
        <Route path="/edit/:id" element={<EditBlog />} />

        {/* About page */}
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Footer visible on all pages */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;