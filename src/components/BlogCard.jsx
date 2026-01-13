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
 * - Displays clickable like and comment counts
 * - Links to full blog details page
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import { toggleLike, hasUserLiked } from "../utils/localStorage";

function BlogCard({ blog }) {
    // Local state for likes to provide immediate feedback
    const [liked, setLiked] = useState(hasUserLiked(blog.id));
    const [likesCount, setLikesCount] = useState(blog.likes || 0);

    /**
     * Handle like button click
     * Toggles like status in localStorage and updates local state
     */
    const handleLikeClick = (e) => {
        e.preventDefault();
        const newLikedState = toggleLike(blog.id);
        setLiked(newLikedState);
        setLikesCount(prev => newLikedState ? prev + 1 : Math.max(0, prev - 1));
    };

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

                {/* Engagement metrics - clickable likes and comments */}
                <div style={{
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'center',
                    marginBottom: '12px',
                    fontSize: '14px',
                    color: 'var(--text-gray)'
                }}>
                    {/* Clickable Like Button */}
                    <button
                        onClick={handleLikeClick}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            color: liked ? '#ef4444' : 'var(--text-gray)',
                            fontSize: '14px',
                            padding: '4px 8px',
                            borderRadius: '8px',
                            transition: 'all 0.2s ease',
                            marginLeft: '-8px' // Align with text
                        }}
                        className="card-like-btn"
                        title={liked ? "Unlike" : "Like"}
                    >
                        {liked ? '❤️' : '🤍'} {likesCount}
                    </button>

                    <span>•</span>

                    {/* Clickable Comment Count - Links to details page */}
                    <Link
                        to={`/blogs/${blog.id}#comments`}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            textDecoration: 'none',
                            color: 'var(--text-gray)',
                            padding: '4px 8px',
                            borderRadius: '8px',
                            transition: 'all 0.2s ease'
                        }}
                        className="card-comment-link"
                        title="View comments"
                    >
                        💬 {blog.comments?.length || 0}
                    </Link>
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