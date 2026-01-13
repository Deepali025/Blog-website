/**
 * Footer.jsx - Footer Component
 * 
 * Displays copyright information and social media links.
 * Appears at the bottom of every page.
 */

function Footer() {
  return (
    <footer className="footer">
      {/* Copyright text */}
      <p>© 2026 TechGlaz Lab | Built with ReactJS</p>

      {/* Social media links */}
      <div className="social">
        <a href="https://github.com/Deepali025" target="_blank" rel="noreferrer">GitHub</a>
        <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="#" target="_blank" rel="noreferrer">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;