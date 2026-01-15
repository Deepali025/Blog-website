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
    // Theme state
    const [dark, setDark] = useState(false);
    // Mobile menu state
    const [isOpen, setIsOpen] = useState(false);

    /**
     * Toggle between dark and light themes
     * Updates body className to trigger CSS theme changes
     */
    const toggleTheme = () => {
        setDark(!dark);
        document.body.className = dark ? "light" : "dark";
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={isOpen ? "nav-open" : ""}>
            {/* Site logo/brand */}
            <h2>TechGlaz Lab</h2>

            {/* Hamburger Button for Mobile */}
            <button className="menu-toggle" onClick={toggleMenu}>
                {isOpen ? "✕" : "☰"}
            </button>

            {/* Navigation links */}
            <div className={`nav-links ${isOpen ? "open" : ""}`}>
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/blogs" onClick={() => setIsOpen(false)}>All Blogs</Link>
                <Link to="/create" onClick={() => setIsOpen(false)}>Create Blog</Link>
                <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>

                {/* Dark mode toggle button inside menu on mobile */}
                <button onClick={toggleTheme} className="theme-toggle">
                    {dark ? "☀️ Light" : "🌙 Dark"}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;