/**
 * BlogCard.jsx - Reusable Blog Card Component
 * 
 * Displays a preview of a blog post in a card format.
 * Used on Home and Blogs pages to show multiple blog posts in a grid.
 * 
 * Props:
 * @param {Object} blog - Blog object containing all blog data
 * 
 * Features:
 * - Shows blog image, title, description
 * - Displays category badge
 * - Shows first 3 tags with overflow indicator
 * - Displays like and comment counts
 * - Links to full blog details page
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

                {/* Tags Display - shows first 3 tags */}
                {blog.tags && blog.tags.length > 0 && (
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        marginBottom: '12px'
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
                        {/* Show count of remaining tags if more than 3 */}
                        {blog.tags.length > 3 && (
                            <span style={{
                                fontSize: '11px',
                                color: 'var(--text-gray)',
                                padding: '4px 0'
                            }}>
                                +{blog.tags.length - 3} more
                            </span>
                        )}
                    </div>
                )}

                {/* Engagement metrics - likes and comments */}
                <div style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'center',
                    marginBottom: '12px',
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
                </div>

                {/* Author and date metadata */}
                <small>
                    <span>{blog.author}</span>
                    <span>•</span>
                    <span>{blog.date}</span>
                </small>

                {/* Link to full blog details */}
                <Link to={`/blogs/${blog.id}`}>Read More</Link>
            </div>
        </div>
    );
}

export default BlogCard;