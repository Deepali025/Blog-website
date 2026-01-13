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
            "Healthy lifestyle includes good food, exercise and positive thinking.",
        category: "Lifestyle",
        author: "Deepali",
        date: "12 Jan 2026",
        image: "https://via.placeholder.com/600x300",
        likes: 0,
        comments: [],
        tags: ["health", "wellness", "fitness", "lifestyle"]
    }
];

export default blogData;