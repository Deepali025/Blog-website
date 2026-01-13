/**
 * Navbar.jsx - Navigation Component
 * 
 * Provides site-wide navigation and dark mode toggle.
 * Sticky positioned at the top of the page.
 * 
 * Features:
 * - Links to all main pages
 * - Dark/Light mode toggle
 * - Responsive design
 * - Glassmorphism effect
 */

import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    // Dark mode state
    const [dark, setDark] = useState(false);

    /**
     * Toggle between dark and light themes
     * Updates body className to trigger CSS theme changes
     */
    const toggleTheme = () => {
        setDark(!dark);
        document.body.className = dark ? "light" : "dark";
    };

    return (
        <nav>
            {/* Site logo/brand */}
            <h2>TechGlaz Lab</h2>

            {/* Navigation links */}
            <Link to="/">Home</Link>
            <Link to="/blogs">All Blogs</Link>
            <Link to="/create">Create Blog</Link>
            <Link to="/about">About</Link>
            <a href="https://github.com/Deepali025" target="_blank" rel="noopener noreferrer">GitHub</a>

            {/* Dark mode toggle button */}
            <button onClick={toggleTheme}>
                {dark ? "Light Mode" : "Dark Mode"}
            </button>
        </nav>
    );
}

export default Navbar;