/**
 * BlogCard.jsx - Reusable Blog Card Component
 * 
 * Displays a preview of a blog post in a card format.
 * Used on Home and Blogs pages to show multiple blog posts in a grid.
 */

import { Link } from "react-router-dom";

function BlogCard({ blog }) {
    return (
        <div className="card">
            {/* Blog featured image */}
            <img src={blog.image} alt={blog.title} />

            <div className="card-content">
                {/* Category badge */}
                <span className="category-badge">{blog.category}</span>

                {/* Blog title */}
                <h3>{blog.title}</h3>

                {/* Short description */}
                <p>{blog.description}</p>

                {/* Card Footer for engagement metrics and link */}
                <div className="card-footer">
                    {/* Tags Display - shows first 3 tags */}
                    {blog.tags && blog.tags.length > 0 && (
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '6px',
                        }}>
                            {blog.tags.slice(0, 3).map((tag, index) => (
                                <span
                                    key={index}
                                    style={{
                                        padding: '4px 10px',
                                        background: 'rgba(99, 102, 241, 0.08)',
                                        color: 'var(--primary)',
                                        borderRadius: '12px',
                                        fontSize: '11px',
                                        fontWeight: '600',
                                        border: '1px solid rgba(99, 102, 241, 0.2)'
                                    }}
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Engagement metrics - likes and comments */}
                    <div style={{
                        display: 'flex',
                        gap: '16px',
                        alignItems: 'center',
                        fontSize: '14px',
                        color: 'var(--text-gray)'
                    }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            ❤️ {blog.likes || 0}
                        </span>
                        <span>•</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            💬 {blog.comments?.length || 0}
                        </span>
                        <span>•</span>
                        <span>{blog.date}</span>
                    </div>

                    {/* Link to full blog details */}
                    <Link to={`/blogs/${blog.id}`}>Read More</Link>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;