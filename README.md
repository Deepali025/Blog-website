# TechGlaz Lab - Personal Blog Website

A modern, feature-rich personal blog website built with ReactJS and localStorage for data persistence. This project demonstrates real-world React concepts including components, routing, state management, and CRUD operations.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.2.5-purple)
![License](https://img.shields.io/badge/license-MIT-green)

## 🌟 Features

### Core Features
- ✅ **Full CRUD Operations** - Create, Read, Update, and Delete blog posts
- ✅ **Category Filtering** - Filter blogs by Tech, Lifestyle, or Education
- ✅ **Search Functionality** - Search blogs by title
- ✅ **Tag-Based Search** - Filter blogs by tags
- ✅ **Responsive Design** - Mobile-friendly layout
- ✅ **Data Persistence** - localStorage for browser-based storage

### Bonus Features
- 🌙 **Dark Mode** - Toggle between light and dark themes
- ❤️ **Like System** - Like/unlike blog posts with counter
- 💬 **Comments System** - Add and delete comments on blogs
- 📷 **Image Upload** - Upload images from device or paste URLs
- 🖼️ **Image Preview** - Live preview before publishing
- 💀 **Skeleton Loaders** - Smooth loading animations
- 🔍 **SEO-Friendly** - Dynamic page titles and meta descriptions
- 🎨 **Modern UI** - Gradient backgrounds, smooth animations, premium design

## 🚀 Live Demo

Visit the live demo: [https://blog-advanced.vercel.app](https://blog-advanced.vercel.app)

## 📸 Screenshots

[Add screenshots of your application here]

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **ReactJS** | UI library for building components |
| **React Router DOM** | Client-side routing |
| **JavaScript (ES6+)** | Core programming language |
| **HTML5** | Semantic markup |
| **CSS3** | Custom styling with CSS variables |
| **Vite** | Build tool and dev server |
| **localStorage** | Browser-based data storage |

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Deepali025/Blog-website.git
   cd blog-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
blog-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation with dark mode toggle
│   │   ├── Footer.jsx           # Footer with social links
│   │   ├── BlogCard.jsx         # Reusable blog card component
│   │   └── BlogCardSkeleton.jsx # Loading skeleton
│   ├── pages/
│   │   ├── Home.jsx             # Landing page with latest blogs
│   │   ├── Blogs.jsx            # All blogs with search/filter
│   │   ├── BlogDetails.jsx      # Full blog view with likes/comments
│   │   ├── CreateBlog.jsx       # Form to create new blog
│   │   ├── EditBlog.jsx         # Form to edit/delete blog
│   │   └── About.jsx            # About page
│   ├── utils/
│   │   └── localStorage.js      # Data management utilities
│   ├── data/
│   │   └── blogData.js          # Sample blog data
│   ├── App.jsx                  # Main app component with routing
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── package.json
└── README.md
```

## 🎯 Usage

### Creating a Blog Post
1. Navigate to "Create Blog" page
2. Fill in title, description, category, and content
3. Add tags (comma-separated)
4. Upload an image or paste URL
5. Click "Publish Blog"

### Editing a Blog Post
1. Open any blog post
2. Click "Edit Blog" button
3. Modify the fields
4. Click "Update Blog" to save changes

### Deleting a Blog Post
1. Open the blog post or go to Edit page
2. Click "Delete" button
3. Confirm deletion

### Filtering Blogs
- Use the search bar to find blogs by title
- Select a category from the dropdown
- Choose a tag to filter by specific topics
- Clear filters individually or all at once

### Liking and Commenting
- Click the heart button to like/unlike a blog
- Scroll to comments section
- Enter your name and comment
- Click "Post Comment"
- Delete comments using the trash icon

## 🎨 Design Features

### Color Palette
- **Primary**: Indigo (#6366f1)
- **Secondary**: Pink (#ec4899)
- **Accent**: Teal (#14b8a6)

### Typography
- **Body**: Inter (Google Fonts)
- **Headings**: Playfair Display (Google Fonts)

### Animations
- Smooth transitions (0.3s ease)
- Shimmer loading animations
- Hover effects on cards and buttons
- Fade-in animations on hero section

## 💾 Data Structure

### Blog Object
```javascript
{
  id: "unique_timestamp",
  title: "Blog Title",
  description: "Short description",
  content: "Full blog content",
  category: "Tech|Lifestyle|Education",
  author: "Author Name",
  date: "MM/DD/YYYY",
  image: "URL or base64",
  likes: 0,
  comments: [],
  tags: ["tag1", "tag2"]
}
```

### Comment Object
```javascript
{
  id: "unique_timestamp",
  author: "Commenter Name",
  text: "Comment text",
  date: "MM/DD/YYYY",
  time: "HH:MM AM/PM"
}
```

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Learning Outcomes

This project demonstrates:
- ✅ React components and props
- ✅ React Router with dynamic routes
- ✅ State management with useState and useEffect
- ✅ Form handling and validation
- ✅ CRUD operations
- ✅ localStorage API usage
- ✅ Component-based architecture
- ✅ Modern CSS with custom properties
- ✅ File upload and base64 conversion
- ✅ Real-time UI updates

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Deepali**
- GitHub: [@Deepali025](https://github.com/Deepali025)

## 🙏 Acknowledgments

- Google Fonts for Inter and Playfair Display
- React team for the amazing library
- Vite for the blazing-fast build tool

## 📞 Support

If you have any questions or need help, please open an issue in the GitHub repository.

---

**Made with ❤️ by Deepali**
