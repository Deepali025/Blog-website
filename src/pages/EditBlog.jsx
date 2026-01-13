/**
 * EditBlog.jsx - Edit/Delete Blog Page
 * 
 * Allows users to edit existing blog posts or delete them.
 * Pre-fills the form with existing blog data.
 * 
 * Features:
 * - Edit title, description, content, tags, and image
 * - Image upload with preview
 * - Delete blog with confirmation
 * - Form validation
 * - Redirects after save/delete
 */

import { useParams, useNavigate } from "react-router-dom";
import { getBlogs, saveBlogs } from "../utils/localStorage";
import { useState, useEffect } from "react";

function EditBlog() {
    // Get blog ID from URL parameter
    const { id } = useParams();
    const navigate = useNavigate();

    // State for blog data
    const [blog, setBlog] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [imagePreview, setImagePreview] = useState("");
    const [tags, setTags] = useState("");

    /**
     * Load existing blog data when component mounts
     * Pre-fills form fields with current blog values
     */
    useEffect(() => {
        // Set SEO title
        document.title = "Edit Blog - TechGlaz Lab";

        const blogs = getBlogs();
        const foundBlog = blogs.find(b => String(b.id) === id);

        if (foundBlog) {
            setBlog(foundBlog);
            setTitle(foundBlog.title);
            setDescription(foundBlog.description);
            setContent(foundBlog.content);
            setImage(foundBlog.image);
            setImagePreview(foundBlog.image);
            // Convert tags array to comma-separated string for editing
            setTags(foundBlog.tags ? foundBlog.tags.join(', ') : '');
        }
    }, [id]);

    /**
     * Handle image file upload
     * Validates file size and type, converts to base64
     */
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file size (max 2MB)
            if (file.size > 2 * 1024 * 1024) {
                alert("⚠️ Image size should be less than 2MB");
                return;
            }

            // Validate file type (images only)
            if (!file.type.startsWith('image/')) {
                alert("⚠️ Please upload an image file");
                return;
            }

            // Convert image to base64 for localStorage storage
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                setImage(base64String);
                setImagePreview(base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    /**
     * Handle image URL input
     * Allows pasting image URLs instead of uploading
     */
    const handleImageUrlChange = (e) => {
        const url = e.target.value;
        setImage(url);
        setImagePreview(url);
    };

    /**
     * Clear current image and reset to placeholder
     */
    const clearImage = () => {
        setImage("https://via.placeholder.com/600x300");
        setImagePreview("https://via.placeholder.com/600x300");
    };

    /**
     * Update blog with new values
     * Parses tags and saves to localStorage
     */
    const updateBlog = () => {
        if (blog) {
            const blogs = getBlogs();
            const blogToUpdate = blogs.find(b => String(b.id) === id);

            if (blogToUpdate) {
                // Parse tags from comma-separated string to array
                const tagsArray = tags
                    .split(',')
                    .map(tag => tag.trim().toLowerCase())
                    .filter(tag => tag.length > 0);

                // Update blog properties
                blogToUpdate.title = title;
                blogToUpdate.description = description;
                blogToUpdate.content = content;
                blogToUpdate.image = image;
                blogToUpdate.tags = tagsArray;

                // Save to localStorage
                saveBlogs(blogs);

                // Navigate back to blog details page
                navigate(`/blogs/${blog.id}`);
            }
        }
    };

    /**
     * Delete blog permanently
     * Shows confirmation dialog before deletion
     */
    const deleteBlog = () => {
        // Confirm deletion to prevent accidental deletions
        if (window.confirm("🗑️ Are you sure you want to delete this blog?")) {
            const blogs = getBlogs();

            // Filter out the blog to delete
            const updatedBlogs = blogs.filter(b => b.id !== id);

            // Save updated blogs array
            saveBlogs(updatedBlogs);

            // Navigate back to blogs list
            navigate("/blogs");
        }
    };

    // Show error message if blog not found
    if (!blog) return (
        <div className="page-container text-center">
            <h2>😕 Blog not found</h2>
        </div>
    );

    return (
        <div className="page-container" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <form onSubmit={(e) => { e.preventDefault(); updateBlog(); }}>
                <h2>✏️ Edit Blog</h2>

                {/* Title input */}
                <input
                    value={title}
                    placeholder="Blog Title"
                    onChange={e => setTitle(e.target.value)}
                />

                {/* Description input */}
                <input
                    value={description}
                    placeholder="Short Description"
                    onChange={e => setDescription(e.target.value)}
                />

                {/* Tags input */}
                <div style={{ marginBottom: '20px' }}>
                    <input
                        placeholder="🏷️ Tags (comma-separated, e.g., react, javascript, tutorial)"
                        value={tags}
                        onChange={e => setTags(e.target.value)}
                    />
                    <small style={{
                        display: 'block',
                        marginTop: '8px',
                        color: 'var(--text-gray)',
                        fontSize: '13px'
                    }}>
                        Add tags separated by commas to help users find your blog
                    </small>
                </div>

                {/* Image Upload Section */}
                <div style={{ marginBottom: '20px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '600',
                        color: 'var(--text-dark)'
                    }}>
                        📷 Blog Image
                    </label>

                    {/* Upload and Clear buttons */}
                    <div style={{
                        display: 'flex',
                        gap: '12px',
                        marginBottom: '12px'
                    }}>
                        <label style={{
                            flex: 1,
                            padding: '12px 20px',
                            background: 'linear-gradient(135deg, var(--accent), #0d9488)',
                            color: 'white',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            textAlign: 'center',
                            fontWeight: '600',
                            transition: 'all 0.3s ease'
                        }}>
                            📁 Change Image
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                style={{ display: 'none' }}
                            />
                        </label>

                        <button
                            type="button"
                            onClick={clearImage}
                            style={{
                                padding: '12px 20px',
                                background: '#ef4444',
                                color: 'white',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                fontWeight: '600',
                                width: 'auto'
                            }}
                        >
                            🗑️ Clear
                        </button>
                    </div>

                    <div style={{
                        textAlign: 'center',
                        margin: '12px 0',
                        color: 'var(--text-gray)',
                        fontSize: '14px'
                    }}>
                        OR
                    </div>

                    {/* URL input as alternative to file upload */}
                    <input
                        placeholder="Or paste image URL"
                        value={image && !image.startsWith('data:') ? image : ''}
                        onChange={handleImageUrlChange}
                    />

                    {/* Image Preview */}
                    {imagePreview && (
                        <div style={{
                            marginTop: '16px',
                            border: '2px solid var(--border)',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            background: 'var(--bg-light)'
                        }}>
                            <img
                                src={imagePreview}
                                alt="Preview"
                                style={{
                                    width: '100%',
                                    height: '300px',
                                    objectFit: 'cover'
                                }}
                            />
                            <div style={{
                                padding: '12px',
                                background: 'var(--bg-white)',
                                textAlign: 'center',
                                fontSize: '14px',
                                color: 'var(--text-gray)'
                            }}>
                                ✅ Current Image
                            </div>
                        </div>
                    )}
                </div>

                {/* Content textarea */}
                <textarea
                    value={content}
                    placeholder="Blog Content"
                    onChange={e => setContent(e.target.value)}
                />

                {/* Action buttons - Update and Delete */}
                <div style={{ display: 'flex', gap: '12px' }}>
                    {/* Update button */}
                    <button type="submit" style={{ flex: 1 }}>
                        💾 Update Blog
                    </button>

                    {/* Delete button */}
                    <button
                        type="button"
                        onClick={deleteBlog}
                        style={{
                            flex: 1,
                            background: 'linear-gradient(135deg, #ef4444, #dc2626)'
                        }}
                    >
                        🗑️ Delete
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditBlog;