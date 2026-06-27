import React, { useState } from 'react';
import './Blog.css';

// Static blog data — replace with your own posts
const blogPosts = [
  {
    id: 1,
    title: 'Why I Started Learning Full-Stack Development',
    excerpt: 'My journey into coding started with a simple curiosity about how websites work...',
    content: `My journey into coding started with a simple curiosity about how websites work. 
    I began with HTML and CSS, then moved into JavaScript, and eventually found my way into 
    the MERN stack. This post covers the key lessons I learned along the way.`,
    date: '2026-05-12',
    category: 'Career',
    image: 'https://via.placeholder.com/600x300?text=Blog+Image+1',
  },
  {
    id: 2,
    title: 'Building My First Full-Stack App',
    excerpt: 'Here is what I learned building a bakery ordering system from scratch...',
    content: `Here is what I learned building a bakery ordering system from scratch. From 
    designing the database schema to handling authentication with JWT, every step taught 
    me something new about real-world application architecture.`,
    date: '2026-06-02',
    category: 'Projects',
    image: 'https://via.placeholder.com/600x300?text=Blog+Image+2',
  },
  {
    id: 3,
    title: 'Understanding JWT Authentication',
    excerpt: 'JSON Web Tokens are everywhere in modern web apps. Here is a simple breakdown...',
    content: `JSON Web Tokens are everywhere in modern web apps. Here is a simple breakdown 
    of how they work, why they're useful, and common pitfalls to avoid when implementing 
    authentication in your own projects.`,
    date: '2026-06-20',
    category: 'Tutorials',
    image: 'https://via.placeholder.com/600x300?text=Blog+Image+3',
  },
];

const categories = ['All', 'Career', 'Projects', 'Tutorials'];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  // Single post detail view
  if (selectedPost) {
    return (
      <div className="blog-container">
        <button className="back-btn" onClick={() => setSelectedPost(null)}>
          ← Back to all posts
        </button>
        <div className="post-detail">
          <img src={selectedPost.image} alt={selectedPost.title} className="post-detail-img" />
          <span className="post-category">{selectedPost.category}</span>
          <h1>{selectedPost.title}</h1>
          <p className="post-date">{new Date(selectedPost.date).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric',
          })}</p>
          <p className="post-content">{selectedPost.content}</p>
        </div>
      </div>
    );
  }

  // Blog list view
  return (
    <div className="blog-container">
      <h1 className="blog-title">My Blog</h1>
      <p className="blog-subtitle">Thoughts on code, projects, and everything in between.</p>

      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="blog-grid">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="blog-card"
            onClick={() => setSelectedPost(post)}
          >
            <img src={post.image} alt={post.title} className="blog-card-img" />
            <div className="blog-card-content">
              <span className="post-category">{post.category}</span>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <p className="post-date">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric', month: 'long', day: 'numeric',
                })}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="no-posts">No posts found in this category.</p>
      )}
    </div>
  );
};

export default Blog;