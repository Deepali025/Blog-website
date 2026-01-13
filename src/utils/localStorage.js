/**
 * localStorage.js - Data Management Utilities
 * 
 * This module provides functions to manage blog data using browser's localStorage.
 * All blog data, likes, and comments are stored locally in the browser.
 * 
 * Storage Keys:
 * - "blogs": Array of all blog posts
 * - "likedBlogs": Array of blog IDs that the user has liked
 */

import blogData from "../data/blogData";

/**
 * Get all blogs from localStorage
 * @returns {Array} Array of blog objects
 */
export const getBlogs = () => {
    const blogs = localStorage.getItem("blogs");
    if (blogs) {
        return JSON.parse(blogs);
    } else {
        // Initialize with sample data if localStorage is empty
        localStorage.setItem("blogs", JSON.stringify(blogData));
        return blogData;
    }
};

/**
 * Save blogs array to localStorage
 * @param {Array} blogs - Array of blog objects to save
 */
export const saveBlogs = (blogs) => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
};

/**
 * Toggle like status for a blog post
 * Prevents duplicate likes by tracking liked blogs separately
 * 
 * @param {string} blogId - ID of the blog to like/unlike
 * @returns {boolean} New like state (true if liked, false if unliked)
 */
export const toggleLike = (blogId) => {
    const blogs = getBlogs();
    const blog = blogs.find(b => b.id === blogId);

    if (blog) {
        // Get list of blogs the user has already liked
        const likedBlogs = JSON.parse(localStorage.getItem("likedBlogs") || "[]");
        const hasLiked = likedBlogs.includes(blogId);

        if (hasLiked) {
            // Unlike: Decrement like count and remove from liked list
            blog.likes = Math.max(0, blog.likes - 1);
            const updatedLikes = likedBlogs.filter(id => id !== blogId);
            localStorage.setItem("likedBlogs", JSON.stringify(updatedLikes));
        } else {
            // Like: Increment like count and add to liked list
            blog.likes = (blog.likes || 0) + 1;
            likedBlogs.push(blogId);
            localStorage.setItem("likedBlogs", JSON.stringify(likedBlogs));
        }

        saveBlogs(blogs);
        return !hasLiked; // Return new like state
    }
    return false;
};

/**
 * Check if the current user has liked a specific blog
 * @param {string} blogId - ID of the blog to check
 * @returns {boolean} True if user has liked the blog
 */
export const hasUserLiked = (blogId) => {
    const likedBlogs = JSON.parse(localStorage.getItem("likedBlogs") || "[]");
    return likedBlogs.includes(blogId);
};

/**
 * Add a new comment to a blog post
 * Comments are added to the beginning of the array (newest first)
 * 
 * @param {string} blogId - ID of the blog to comment on
 * @param {Object} commentData - Comment data with author and text
 * @param {string} commentData.author - Name of the commenter
 * @param {string} commentData.text - Comment content
 * @returns {Object|null} The newly created comment object, or null if blog not found
 */
export const addComment = (blogId, commentData) => {
    const blogs = getBlogs();
    const blog = blogs.find(b => b.id === blogId);

    if (blog) {
        // Initialize comments array if it doesn't exist
        if (!blog.comments) {
            blog.comments = [];
        }

        // Create new comment object with timestamp
        const newComment = {
            id: Date.now().toString(),
            author: commentData.author,
            text: commentData.text,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        // Add comment to beginning of array (newest first)
        blog.comments.unshift(newComment);
        saveBlogs(blogs);
        return newComment;
    }
    return null;
};

/**
 * Delete a comment from a blog post
 * @param {string} blogId - ID of the blog containing the comment
 * @param {string} commentId - ID of the comment to delete
 * @returns {boolean} True if comment was deleted successfully
 */
export const deleteComment = (blogId, commentId) => {
    const blogs = getBlogs();
    const blog = blogs.find(b => b.id === blogId);

    if (blog && blog.comments) {
        // Filter out the comment with matching ID
        blog.comments = blog.comments.filter(c => c.id !== commentId);
        saveBlogs(blogs);
        return true;
    }
    return false;
};
