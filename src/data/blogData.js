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
    },
    {
        id: "6",
        title: "The Art of Travel",
        description: "How exploring new places broadens your mind",
        content:
            "Traveling is not just about visiting new places; it's about experiencing different cultures, meeting new people, and stepping outside your comfort zone. It teaches you resilience and adaptability.",
        category: "Lifestyle",
        author: "Deepali",
        date: "16 Jan 2026",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600&h=300&auto=format&fit=crop",
        likes: 0,
        comments: [],
        tags: ["travel", "adventure", "culture", "lifestyle"]
    },
    {
        id: "7",
        title: "Sustainable Living",
        description: "Small changes for a greener planet",
        content:
            "Sustainability starts at home. By reducing plastic waste, saving energy, and choosing eco-friendly products, we can all contribute to a healthier planet for future generations.",
        category: "Lifestyle",
        author: "Deepali",
        date: "17 Jan 2026",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?q=80&w=600&h=300&auto=format&fit=crop",
        likes: 0,
        comments: [],
        tags: ["sustainability", "eco-friendly", "environment", "green"]
    },
    {
        id: "8",
        title: "Modern UI Design",
        description: "Visual aesthetics in the digital age",
        content:
            "A successful UI is more than just pretty colors. It's about hierarchy, focus, and creating an intuitive journey for the user through clear visual cues and consistent design patterns.",
        category: "Tech",
        author: "Deepali",
        date: "18 Jan 2026",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=600&h=300&auto=format&fit=crop",
        likes: 0,
        comments: [],
        tags: ["UI", "UX", "design", "aesthetics"]
    }
];

export default blogData;