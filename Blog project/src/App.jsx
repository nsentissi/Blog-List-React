import { useState } from "react";
import "./App.css";
import BlogForm from "./components/BlogForm";
import Bloglist from "./components/BlogList";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

function App() {
  const [blogs, setBlogs] = useState([]);

  return (
    <>
      <Navbar />

      <BlogForm blogs={blogs} setBlogs={setBlogs} />
      <Bloglist blogs={blogs} setBlogs={setBlogs} />
    </>
  );
}

export default App;
