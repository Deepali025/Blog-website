import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getBlogs, saveBlogs } from "../utils/localStorage";

function CreateBlog() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [imagePreview, setImagePreview] = useState("");
    const [tags, setTags] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Create New Blog - TechGlaz Lab";
    }, []);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                alert("⚠️ Image size should be less than 2MB");
                return;
            }

            if (!file.type.startsWith('image/')) {
                alert("⚠️ Please upload an image file");
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                setImage(base64String);
                setImagePreview(base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageUrlChange = (e) => {
        const url = e.target.value;
        setImage(url);
        setImagePreview(url);
    };

    const clearImage = () => {
        setImage("");
        setImagePreview("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !description || !content || !category) {
            alert("⚠️ All fields are required");
            return;
        }

        // Parse tags from comma-separated string
        const tagsArray = tags
            .split(',')
            .map(tag => tag.trim().toLowerCase())
            .filter(tag => tag.length > 0);

        const blogs = getBlogs();
        blogs.push({
            id: Date.now().toString(),
            title,
            description,
            content,
            category,
            image: image || "https://via.placeholder.com/600x300",
            author: "Deepali",
            date: new Date().toLocaleDateString(),
            likes: 0,
            comments: [],
            tags: tagsArray
        });

        saveBlogs(blogs);
        navigate("/blogs");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>✍️ Create New Blog</h2>

            <input
                placeholder="Blog Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <input
                placeholder="Short Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />

            <select value={category} onChange={e => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option value="Tech">💻 Tech</option>
                <option value="Lifestyle">🌿 Lifestyle</option>
                <option value="Education">📖 Education</option>
            </select>

            {/* Tags Input */}
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
                        📁 Upload Image
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            style={{ display: 'none' }}
                        />
                    </label>

                    {imagePreview && (
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
                    )}
                </div>

                <div style={{
                    textAlign: 'center',
                    margin: '12px 0',
                    color: 'var(--text-gray)',
                    fontSize: '14px'
                }}>
                    OR
                </div>

                <input
                    placeholder="Or paste image URL"
                    value={image && !image.startsWith('data:') ? image : ''}
                    onChange={handleImageUrlChange}
                />

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
                            ✅ Image Preview
                        </div>
                    </div>
                )}
            </div>

            <textarea
                placeholder="Write your blog content here..."
                value={content}
                onChange={e => setContent(e.target.value)}
            />

            <button type="submit">Publish Blog 🚀</button>
        </form>
    );
}

export default CreateBlog;