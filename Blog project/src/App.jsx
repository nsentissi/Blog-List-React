import { useState } from 'react'
import './App.css'
import BlogForm from './components/BlogForm'
import Bloglist from './components/BlogList'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [blogs, setBlogs] = useState([])

  return (
    <>
    <h1>Nawfal test blog</h1>
    <BlogForm  blogs={blogs} setBlogs = {setBlogs} />
    <Bloglist blogs={blogs} setBlogs = {setBlogs}/>
    

    </>
  )
}

export default App
