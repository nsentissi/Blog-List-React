import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogForm = ({blogs, setBlogs}) => {
  
  const [formData, setFormData] = useState ({
    title: '',
    image: '',
    description: '',
    image: '',
    date: '', 
    author: '',


  })

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData ({
      ... formData, 
      [name]: value,
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      ... formData, 
      likes: 0,
      comments: [],
      id: Date.now(),
    };
    setBlogs([...blogs, newBlog]);
    setFormData ({
      title: '',
      image: '',
      description: '',
      image: '',
      date: '', 
      author: '',
    })
    console.log(blogs)
  };
  


  
  
    return (
      <div className='blog-form'>
      <form onSubmit={handleFormSubmit}>
        <h4>Create your travel blog</h4>
        <div className="inputGroup">
          <input
            type="text"
            required=""
            autoComplete="off"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <label for="name">Title</label>
        </div>

        <div className="inputGroup">
          <input
            type="text"
            required=""
            autoComplete="off"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />
          <label for="name">Image Url</label>
        </div>

        <div className="inputGroup">
          <textarea
            required=""
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="5"
            cols="19"
            placeholder='Description'
          />
          
        </div>

        <div className="inputGroup">
          <input
            type="text"
            required=""
            autoComplete="off"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
          />
          <label for="name">Author</label>
        </div>

        <div className="inputGroup">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
          <label for="name">Date</label>
        </div>

        <button className='button' type="submit">Create Blog</button>
      </form>
    </div>
        

      
   
        )

}

export default BlogForm
