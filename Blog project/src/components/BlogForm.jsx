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
        <div>
            <input 
            type = 'text'
            name= 'title'  
            placeholder='Title:'
            value= {formData.title}
            onChange={handleInputChange}
            />
        </div>
        <div>
            <input 
            type = 'text'
            name= 'image' 
            src='' 
            placeholder='Image Url :'
            value= {formData.image}
            onChange={handleInputChange}
            />
        </div>
        <div>
            <textarea 
            type = 'text'
            name= 'description'  
            placeholder= 'Description :'
            value= {formData.description}
            onChange={handleInputChange}
            rows="5" cols="19"
            />
        </div>
        <div>
            <input 
            type = 'text'
            name= 'author'
            placeholder='Author'
            value= {formData.author}  
            onChange={handleInputChange}
            />
        </div>
        <div>
            <input 
            type = 'date'
            name= 'date'  
            value= {formData.date}
            onChange={handleInputChange}
            />
        </div>
      
        <button type="submit">Create Blog</button>
        </form>
      </div>
   
        )

}

export default BlogForm
