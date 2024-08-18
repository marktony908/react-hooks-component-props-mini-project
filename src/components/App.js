// src/components/App.js
import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import blogData from '../data/blog';

function App() {
  return (
    <div>
      <Header name="My Blog" />
      <About
        image="https://via.placeholder.com/215"
        about="This is a blog about various topics."
      />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
