import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Blog({ blog, blogs, setBlogs, isLongTextExpanded, setLongTextExpanded, toggleLongText  }) {

  
  return (
    <div key={blog.id} className="card" style={{ width: '18rem' }}>
      <img src={blog.image} className="card-img-top" alt={blog.title} />
      <div className="card-body">
        <h5 className="card-title">{blog.title}</h5>
        <p className={`card-text ${isLongTextExpanded? '.text' : 'long-text'}`}>{blog.description}</p>
        <p className="card-text">{blog.publishDate}</p>
        <p className="card-text">{blog.author}</p>
        <a onClick={toggleLongText} className="btn btn-primary">
        {isLongTextExpanded? 'Show less' : 'Show more'}
        </a>
      </div>
    </div>
  );
}

export default Blog;
