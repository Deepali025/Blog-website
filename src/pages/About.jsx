import { useEffect } from "react";

function About() {
    useEffect(() => {
        document.title = "About Us - TechGlaz Lab";
    }, []);

    return (
        <div className="page-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="text-center">📖 About TechGlaz Lab</h2>

            <div style={{
                background: 'var(--bg-white)',
                padding: '40px',
                borderRadius: '20px',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border)'
            }}>
                <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '24px' }}>
                    Welcome to <strong>TechGlaz Lab</strong> – a personal blog where creativity meets knowledge.
                    This platform is built to share insights, stories, and experiences across various topics
                    including technology, lifestyle, and education.
                </p>

                <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '24px' }}>
                    Built with modern web technologies including <strong>React</strong>, <strong>React Router</strong>,
                    and <strong>localStorage</strong> for a seamless, fast, and interactive experience.
                </p>

                <div style={{
                    marginTop: '40px',
                    paddingTop: '32px',
                    borderTop: '2px solid var(--border)'
                }}>
                    <h3 style={{ marginBottom: '16px', fontSize: '24px' }}>✨ Features</h3>
                    <ul style={{
                        fontSize: '16px',
                        lineHeight: '2',
                        color: 'var(--text-gray)',
                        paddingLeft: '24px'
                    }}>
                        <li>Create, edit, and delete blog posts</li>
                        <li>Search and filter by category</li>
                        <li>Beautiful, responsive design</li>
                        <li>Dark mode support</li>
                        <li>LocalStorage persistence</li>
                    </ul>
                </div>

                <div style={{
                    marginTop: '32px',
                    padding: '24px',
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1))',
                    borderRadius: '16px',
                    textAlign: 'center'
                }}>
                    <p style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-dark)' }}>
                        Made with ❤️ by <a href="https://github.com/Deepali025" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Deepali</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
