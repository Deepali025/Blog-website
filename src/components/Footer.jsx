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
      <p>© 2026 TechGlaz Lab | Built with ❤️ by Deepali</p>

      {/* Social media links */}
      <div className="social">
        <a href="https://blog-advanced.vercel.app" target="_blank" rel="noreferrer" title="Live Website">🚀 Live on Vercel</a>
        <a href="https://github.com/Deepali025" target="_blank" rel="noreferrer" title="Follow me">👤 GitHub Profile</a>
        <a href="https://github.com/Deepali025" target="_blank" rel="noreferrer" title="Portfolio">🌐 Portfolio</a>
      </div>
    </footer>
  );
}

export default Footer;