import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogs, toggleLike, hasUserLiked, addComment, deleteComment } from "../utils/localStorage";

function BlogDetails() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [liked, setLiked] = useState(false);
    const [commentAuthor, setCommentAuthor] = useState("");
    const [commentText, setCommentText] = useState("");

    useEffect(() => {
        const blogs = getBlogs();
        const foundBlog = blogs.find(b => String(b.id) === id);
        setBlog(foundBlog);
        setLiked(hasUserLiked(id));

        // Set SEO meta tags
        if (foundBlog) {
            document.title = `${foundBlog.title} - TechGlaz Lab`;
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute("content", foundBlog.description || foundBlog.content.substring(0, 155));
            }
        }

        // Handle scroll to comments if URL hash is present
        if (window.location.hash === '#comments') {
            setTimeout(() => {
                const element = document.getElementById('comments');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500);
        }
    }, [id]);

    const handleLike = () => {
        const newLikedState = toggleLike(id);
        setLiked(newLikedState);

        // Refresh blog data
        const blogs = getBlogs();
        const updatedBlog = blogs.find(b => String(b.id) === id);
        setBlog(updatedBlog);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();

        if (!commentAuthor.trim() || !commentText.trim()) {
            alert("⚠️ Please fill in both name and comment");
            return;
        }

        addComment(id, {
            author: commentAuthor,
            text: commentText
        });

        // Refresh blog data
        const blogs = getBlogs();
        const updatedBlog = blogs.find(b => String(b.id) === id);
        setBlog(updatedBlog);

        // Clear form
        setCommentAuthor("");
        setCommentText("");
    };

    const handleDeleteComment = (commentId) => {
        if (window.confirm("🗑️ Delete this comment?")) {
            deleteComment(id, commentId);

            // Refresh blog data
            const blogs = getBlogs();
            const updatedBlog = blogs.find(b => String(b.id) === id);
            setBlog(updatedBlog);
        }
    };

    if (!blog) return (
        <div className="page-container text-center">
            <h2>😕 Blog not found</h2>
            <Link to="/blogs" style={{ marginTop: '20px', display: 'inline-block' }}>
                ← Back to Blogs
            </Link>
        </div>
    );

    return (
        <div className="page-container" style={{ maxWidth: '800px' }}>
            <img
                src={blog.image}
                alt={blog.title}
                style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    marginBottom: '32px',
                    boxShadow: 'var(--shadow-lg)'
                }}
            />

            <span className="category-badge">{blog.category}</span>

            {/* Tags Display */}
            {blog.tags && blog.tags.length > 0 && (
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '24px'
                }}>
                    {blog.tags.map((tag, index) => (
                        <span
                            key={index}
                            style={{
                                padding: '6px 14px',
                                background: 'rgba(99, 102, 241, 0.1)',
                                color: 'var(--primary)',
                                borderRadius: '16px',
                                fontSize: '13px',
                                fontWeight: '600',
                                border: '1px solid rgba(99, 102, 241, 0.2)'
                            }}
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            )}

            <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '48px',
                marginTop: '16px',
                marginBottom: '24px',
                lineHeight: '1.2'
            }}>
                {blog.title}
            </h1>

            <div style={{
                display: 'flex',
                gap: '16px',
                marginBottom: '32px',
                color: 'var(--text-gray)',
                fontSize: '15px',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}>
                <span>✍️ <a href="https://github.com/Deepali025" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '600' }}>{blog.author}</a></span>
                <span>•</span>
                <span>📅 {blog.date}</span>
                <span>•</span>
                <button
                    onClick={handleLike}
                    className="like-button"
                    style={{
                        background: liked ? 'linear-gradient(135deg, #ef4444, #dc2626)' : 'transparent',
                        color: liked ? 'white' : 'var(--text-gray)',
                        border: liked ? 'none' : '2px solid var(--border)',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.3s ease'
                    }}
                >
                    {liked ? '❤️' : '🤍'} {blog.likes || 0} {blog.likes === 1 ? 'Like' : 'Likes'}
                </button>
            </div>

            <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: 'var(--text-dark)',
                marginBottom: '40px'
            }}>
                {blog.content}
            </p>

            <div style={{
                display: 'flex',
                gap: '16px',
                paddingTop: '32px',
                borderTop: '2px solid var(--border)',
                marginBottom: '48px'
            }}>
                <Link
                    to="/blogs"
                    style={{
                        padding: '12px 24px',
                        background: 'var(--bg-light)',
                        color: 'var(--text-dark)',
                        textDecoration: 'none',
                        borderRadius: '10px',
                        fontWeight: '600',
                        border: '2px solid var(--border)',
                        transition: 'all 0.3s ease'
                    }}
                >
                    ← Back to Blogs
                </Link>

                <Link
                    to={`/edit/${blog.id}`}
                    style={{
                        padding: '12px 24px',
                        background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '10px',
                        fontWeight: '600',
                        transition: 'all 0.3s ease'
                    }}
                >
                    ✏️ Edit Blog
                </Link>
            </div>

            {/* Comments Section */}
            <div id="comments" className="comments-section" style={{
                background: 'var(--bg-white)',
                padding: '32px',
                borderRadius: '20px',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border)'
            }}>
                <h3 style={{
                    fontSize: '28px',
                    marginBottom: '24px',
                    fontFamily: "'Playfair Display', serif"
                }}>
                    💬 Comments ({blog.comments?.length || 0})
                </h3>

                {/* Comment Form */}
                <form onSubmit={handleCommentSubmit} style={{ marginBottom: '32px' }}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={commentAuthor}
                        onChange={(e) => setCommentAuthor(e.target.value)}
                        style={{ marginBottom: '12px' }}
                    />
                    <textarea
                        placeholder="Write your comment..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        style={{ minHeight: '100px', marginBottom: '12px' }}
                    />
                    <button type="submit" style={{ width: '100%' }}>
                        💬 Post Comment
                    </button>
                </form>

                {/* Comments List */}
                <div className="comments-list">
                    {blog.comments && blog.comments.length > 0 ? (
                        blog.comments.map(comment => (
                            <div key={comment.id} className="comment-item" style={{
                                background: 'var(--bg-light)',
                                padding: '20px',
                                borderRadius: '12px',
                                marginBottom: '16px',
                                border: '1px solid var(--border)'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    marginBottom: '12px'
                                }}>
                                    <div>
                                        <strong style={{
                                            fontSize: '16px',
                                            color: 'var(--primary)'
                                        }}>
                                            {comment.author}
                                        </strong>
                                        <div style={{
                                            fontSize: '13px',
                                            color: 'var(--text-gray)',
                                            marginTop: '4px'
                                        }}>
                                            {comment.date} at {comment.time}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleDeleteComment(comment.id)}
                                        style={{
                                            background: 'transparent',
                                            border: 'none',
                                            color: 'var(--text-gray)',
                                            cursor: 'pointer',
                                            fontSize: '18px',
                                            padding: '4px 8px',
                                            width: 'auto'
                                        }}
                                        title="Delete comment"
                                    >
                                        🗑️
                                    </button>
                                </div>
                                <p style={{
                                    fontSize: '15px',
                                    lineHeight: '1.6',
                                    color: 'var(--text-dark)',
                                    margin: 0
                                }}>
                                    {comment.text}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p style={{
                            textAlign: 'center',
                            color: 'var(--text-gray)',
                            fontSize: '15px',
                            padding: '20px'
                        }}>
                            No comments yet. Be the first to comment! 💭
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;