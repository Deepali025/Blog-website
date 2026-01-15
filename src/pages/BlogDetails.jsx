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
        const foundBlog = blogs.find(b => b.id === id);
        setBlog(foundBlog);
        setLiked(hasUserLiked(id));

        // Set SEO meta tags
        if (foundBlog) {
            document.title = `${foundBlog.title} - TechGlaz Lab`;
        }
    }, [id]);

    const handleLike = () => {
        const newLikedState = toggleLike(id);
        setLiked(newLikedState);
        const blogs = getBlogs();
        setBlog(blogs.find(b => b.id === id));
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (!commentAuthor.trim() || !commentText.trim()) return alert("⚠️ Please fill in all fields");

        addComment(id, { author: commentAuthor, text: commentText });
        const blogs = getBlogs();
        setBlog(blogs.find(b => b.id === id));
        setCommentAuthor("");
        setCommentText("");
    };

    const handleDeleteComment = (commentId) => {
        if (window.confirm("🗑️ Delete this comment?")) {
            deleteComment(id, commentId);
            const blogs = getBlogs();
            setBlog(blogs.find(b => b.id === id));
        }
    };

    if (!blog) return (
        <div className="page-container text-center">
            <h2>😕 Blog not found</h2>
            <Link to="/blogs" className="btn-secondary">← Back to Blogs</Link>
        </div>
    );

    return (
        <div className="page-container single-post">
            <div className="post-header">
                <img src={blog.image} alt={blog.title} className="featured-image" />
                <span className="category-badge">{blog.category}</span>
                <h1>{blog.title}</h1>

                <div className="post-meta">
                    <span>✍️ {blog.author}</span>
                    <span>📅 {blog.date}</span>
                    <button
                        onClick={handleLike}
                        className={`like-btn ${liked ? 'liked' : ''}`}
                    >
                        {liked ? '❤️' : '🤍'} {blog.likes || 0}
                    </button>
                </div>
            </div>

            <div className="post-content">
                <p>{blog.content}</p>
            </div>

            <div className="post-actions">
                <Link to="/blogs" className="btn-outline">← Back to Blogs</Link>
                <Link to={`/edit/${blog.id}`} className="btn-primary">✏️ Edit Blog</Link>
            </div>

            <section className="comments-section">
                <h3>💬 Comments ({blog.comments?.length || 0})</h3>

                <form onSubmit={handleCommentSubmit} className="comment-form">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={commentAuthor}
                        onChange={(e) => setCommentAuthor(e.target.value)}
                    />
                    <textarea
                        placeholder="Share your thoughts..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    />
                    <button type="submit">Post Comment</button>
                </form>

                <div className="comments-list">
                    {blog.comments?.map(comment => (
                        <div key={comment.id} className="comment-card">
                            <div className="comment-header">
                                <div>
                                    <strong>{comment.author}</strong>
                                    <small>{comment.date}</small>
                                </div>
                                <button onClick={() => handleDeleteComment(comment.id)} className="delete-btn">🗑️</button>
                            </div>
                            <p>{comment.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default BlogDetails;