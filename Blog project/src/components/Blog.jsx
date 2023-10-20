import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Comments from './Comments';

function Blog({ blog, blogs, setBlogs, isLongTextExpanded, setLongTextExpanded, toggleLongText  }) {

const [commentText, setCommentText] = useState('')
    

    const handleAddComment = (e) =>{
        e.preventDefault()
        const updatedBlogs= blogs.map((b) =>{
          return  b.id === blog.id ? { ...b, comments : [...b.comments,commentText] } : b  
        })
        setBlogs(updatedBlogs);
        setCommentText('')
    }

    const handleLike = () => {
        const updatedBlogs = blogs.map((b) =>
          b.id === blog.id ? { ...b, likes: b.likes + 1 } : b
        );
        setBlogs(updatedBlogs);
      };

  
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
        <div className='Like-section'>
        <p>likes: {blog.likes}</p>
        <button onClick={handleLike}>Like</button>
        </div>
        <div className='comment-section'>
            {blog.comments.length === 0 ? (<p>No comments yet</p>): (blog.comments.map((comment, index)=>{
               return <Comments comment={comment} index={index} isLongTextExpanded={isLongTextExpanded}/>
            }))}

        <input type="text"
               placeholder='Add a comment'
               value = {commentText} 
               onChange={(e)=>setCommentText(e.target.value)} 
                />

        <button onClick={handleAddComment}>Add Comment </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
