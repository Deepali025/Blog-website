import { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";
import BlogCardSkeleton from "../components/BlogCardSkeleton";
import { getBlogs } from "../utils/localStorage";

function Blogs() {
    const [allBlogs, setAllBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [selectedTag, setSelectedTag] = useState("");

    useEffect(() => {
        // Set SEO meta tags
        document.title = "All Blogs - TechGlaz Lab";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", "Browse all blog posts on TechGlaz Lab. Filter by category, search by title, or explore by tags. Topics include tech, lifestyle, and education.");
        }

        // Simulate loading delay
        setTimeout(() => {
            setAllBlogs(getBlogs());
            setLoading(false);
        }, 600);
    }, []);

    // Get all unique tags from all blogs
    const allTags = [...new Set(
        allBlogs.flatMap(blog => blog.tags || [])
    )].sort();

    const filteredBlogs = allBlogs.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === "" || blog.category === category;
        const matchesTag = selectedTag === "" || (blog.tags && blog.tags.includes(selectedTag));

        return matchesSearch && matchesCategory && matchesTag;
    });

    return (
        <div className="page-container">
            <h2 className="text-center">📚 All Blogs</h2>

            {/* Search & Filter */}
            <div className="filters">
                <input
                    placeholder="🔍 Search blog by title..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

                <select value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="">All Categories</option>
                    <option value="Tech">💻 Tech</option>
                    <option value="Lifestyle">🌿 Lifestyle</option>
                    <option value="Education">📖 Education</option>
                    <option value="Travel">✈️ Travel</option>
                    <option value="Wellness">🧘 Wellness</option>
                </select>

                <select value={selectedTag} onChange={e => setSelectedTag(e.target.value)}>
                    <option value="">All Tags</option>
                    {allTags.map(tag => (
                        <option key={tag} value={tag}>
                            #{tag}
                        </option>
                    ))}
                </select>
            </div>

            {/* Active Filters Display */}
            {(search || category || selectedTag) && (
                <div style={{
                    display: 'flex',
                    gap: '8px',
                    flexWrap: 'wrap',
                    marginBottom: '24px',
                    alignItems: 'center'
                }}>
                    <span style={{ fontSize: '14px', color: 'var(--text-gray)' }}>
                        Active filters:
                    </span>
                    {search && (
                        <span style={{
                            padding: '6px 12px',
                            background: 'var(--bg-white)',
                            border: '1px solid var(--border)',
                            borderRadius: '8px',
                            fontSize: '13px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                        }}>
                            Search: "{search}"
                            <button
                                onClick={() => setSearch("")}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: '0',
                                    width: 'auto',
                                    fontSize: '14px'
                                }}
                            >
                                ✕
                            </button>
                        </span>
                    )}
                    {category && (
                        <span style={{
                            padding: '6px 12px',
                            background: 'var(--bg-white)',
                            border: '1px solid var(--border)',
                            borderRadius: '8px',
                            fontSize: '13px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                        }}>
                            Category: {category}
                            <button
                                onClick={() => setCategory("")}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: '0',
                                    width: 'auto',
                                    fontSize: '14px'
                                }}
                            >
                                ✕
                            </button>
                        </span>
                    )}
                    {selectedTag && (
                        <span style={{
                            padding: '6px 12px',
                            background: 'var(--bg-white)',
                            border: '1px solid var(--border)',
                            borderRadius: '8px',
                            fontSize: '13px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                        }}>
                            Tag: #{selectedTag}
                            <button
                                onClick={() => setSelectedTag("")}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: '0',
                                    width: 'auto',
                                    fontSize: '14px'
                                }}
                            >
                                ✕
                            </button>
                        </span>
                    )}
                    <button
                        onClick={() => {
                            setSearch("");
                            setCategory("");
                            setSelectedTag("");
                        }}
                        style={{
                            padding: '6px 12px',
                            background: 'transparent',
                            border: '1px solid var(--border)',
                            borderRadius: '8px',
                            fontSize: '13px',
                            cursor: 'pointer',
                            color: 'var(--text-gray)',
                            width: 'auto'
                        }}
                    >
                        Clear all
                    </button>
                </div>
            )}

            {loading ? (
                <div className="grid">
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                    <BlogCardSkeleton />
                </div>
            ) : filteredBlogs.length === 0 ? (
                <p className="text-center" style={{ color: 'var(--text-gray)', marginTop: '40px' }}>
                    No blogs found. Try a different search or filter.
                </p>
            ) : (
                <div className="grid">
                    {filteredBlogs.map(blog => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Blogs;