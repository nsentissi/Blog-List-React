import React from 'react';
import Blog from './Blog'
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogList = ({blogs, setBlogs}) => {
    return (
        <div>
            {blogs.map(blog=>{
                <Blog key={blog.id} blog={blog} blogs={blogs} setBlogs={setBlogs} />
            })}
        
        </div>
    )
}

export default BlogList