import { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";
import BlogCardSkeleton from "../components/BlogCardSkeleton";
import { getBlogs } from "../utils/localStorage";

function Home() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Set SEO meta tags
        document.title = "TechGlaz Lab - Personal Tech Blog";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", "Welcome to TechGlaz Lab - A personal blog sharing knowledge, creativity, and life experiences in technology, lifestyle, and education.");
        } else {
            const meta = document.createElement('meta');
            meta.name = "description";
            meta.content = "Welcome to TechGlaz Lab - A personal blog sharing knowledge, creativity, and life experiences in technology, lifestyle, and education.";
            document.head.appendChild(meta);
        }

        // Simulate loading delay for demonstration
        setTimeout(() => {
            const allBlogs = getBlogs();
            setBlogs(allBlogs.slice(0, 3));
            setLoading(false);
        }, 800);
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section className="hero">
                <h1>TechGlaz Lab</h1>
                <p>
                    A personal blog to share knowledge, creativity, and life experiences.
                </p>
            </section>

            {/* Latest Blogs */}
            <h2 style={{ textAlign: "center" }}>Latest Blogs</h2>
            <div className="grid">
                {loading ? (
                    <>
                        <BlogCardSkeleton />
                        <BlogCardSkeleton />
                        <BlogCardSkeleton />
                    </>
                ) : (
                    blogs.map(blog => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))
                )}
            </div>
        </div>
    );
}

export default Home;