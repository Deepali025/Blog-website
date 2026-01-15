/**
 * blogData.js - Sample Blog Data
 * 
 * This file contains the initial sample blog posts that are loaded
 * into localStorage when the application first runs.
 * 
 * Each blog object contains:
 * - id: Unique identifier
 * - title: Blog post title
 * - description: Short summary
 * - content: Full blog content
 * - category: Tech, Lifestyle, or Education
 * - author: Author name
 * - date: Publication date
 * - image: Image URL or base64 string
 * - likes: Number of likes (initialized to 0)
 * - comments: Array of comment objects (initialized empty)
 * - tags: Array of searchable tags
 */

const blogData = [
    {
        id: "1",
        title: "Introduction to React",
        description: "Basics of ReactJS for beginners",
        content:
            "React is a JavaScript library used to build fast and interactive user interfaces.",
        category: "Tech",
        author: "Deepali",
        date: "10 Jan 2026",
        image: "https://via.placeholder.com/600x300",
        likes: 0,
        comments: [],
        tags: ["react", "javascript", "frontend", "web development"]
    },
    {
        id: "2",
        title: "Healthy Lifestyle",
        description: "Simple habits for a healthy life",
        content:
            "Healthy lifestyle includes good food, exercise and positive thinking. Research shows that maintaining a balanced diet and regular physical activity can significantly improve overall well-being and longevity.",
        category: "Lifestyle",
        author: "Deepali",
        date: "12 Jan 2026",
        image: "https://images.unsplash.com/photo-1545208393-2160295eb69e?q=80&w=600&h=300&auto=format&fit=crop",
        likes: 0,
        comments: [],
        tags: ["health", "wellness", "fitness", "lifestyle"]
    },
    {
        id: "3",
        title: "The Future of AI",
        description: "Exploring the impact of Artificial Intelligence",
        content:
            "Artificial Intelligence is transforming how we work and live. From automated assistants to complex data analysis, the potential for AI to drive innovation is immense. However, it also brings significant ethical considerations that must be addressed.",
        category: "Tech",
        author: "Deepali",
        date: "14 Jan 2026",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&h=300&auto=format&fit=crop",
        likes: 0,
        comments: [],
        tags: ["AI", "technology", "future", "innovation"]
    },
    {
        id: "4",
        title: "Learning Made Easy",
        description: "Tips for effective online learning",
        content:
            "Online education has opened doors for millions. To make the most of it, one needs disciplined study habits, a dedicated workspace, and the right digital tools to stay organized and engaged.",
        category: "Education",
        author: "Deepali",
        date: "15 Jan 2026",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&h=300&auto=format&fit=crop",
        likes: 0,
        comments: [],
        tags: ["education", "learning", "study", "online"]
    },
    {
        id: "5",
        title: "Mastering JavaScript",
        description: "Deep dive into advanced JS concepts",
        content:
            "JavaScript is the backbone of modern web development. Understanding closures, prototypes, and asynchronous programming is crucial for any developer looking to build robust and efficient applications.",
        category: "Tech",
        author: "Deepali",
        date: "15 Jan 2026",
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=600&h=300&auto=format&fit=crop",
        likes: 0,
        comments: [],
        tags: ["javascript", "coding", "webdev", "advanced"]
    }
];

export default blogData;