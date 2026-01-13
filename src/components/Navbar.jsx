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
    // Mobile menu state
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    /**
     * Toggle between dark and light themes
     * Updates body className to trigger CSS theme changes
     */
    const toggleTheme = () => {
        setDark(!dark);
        document.body.className = dark ? "light" : "dark";
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <div className="nav-container">
                {/* Site logo/brand */}
                {/* Site logo/brand - Clickable Link to Home */}
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h2>TechGlaz Lab</h2>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    {isMenuOpen ? "✕" : "☰"}
                </button>

                {/* Navigation links */}
                <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link to="/blogs" onClick={() => setIsMenuOpen(false)}>All Blogs</Link>
                    <Link to="/create" onClick={() => setIsMenuOpen(false)}>Create Blog</Link>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                </div>

                {/* Dark mode toggle button - Always visible or moved to menu? 
                    Let's keep it separately or inside menu. 
                    Actually, usually it's better to be always visible or inside the menu on mobile.
                    Let's keep it outside the nav-links div for desktop, but maybe hide on mobile and put inside?
                    Or just keep it next to hamburger.
                */}
                <div className="theme-toggle">
                    <button onClick={toggleTheme}>
                        {dark ? "Light Mode" : "Dark Mode"}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;