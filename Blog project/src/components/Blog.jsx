import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Comments from "./Comments";

function Blog({
  blog,
  blogs,
  setBlogs,
}) {
  const [commentText, setCommentText] = useState("");
  const [isBlogExtended, setBlogExtended] = useState(false)

  const toggleLongText = () => {
    setBlogExtended(!isBlogExtended);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    const updatedBlogs = blogs.map((b) => {
      return b.id === blog.id
        ? { ...b, comments: [...b.comments, commentText] }
        : b;
    });
    setBlogs(updatedBlogs);
    setCommentText("");
  };

  const handleLike = () => {
    const updatedBlogs = blogs.map((b) =>
      b.id === blog.id ? { ...b, likes: b.likes + 1 } : b
    );
    setBlogs(updatedBlogs);
  };

  const handleDelete = () => {
    const updatedBlogs = blogs.filter((b) => b.id != blog.id);
    setBlogs(updatedBlogs);
  };

  return (
    <div key={blog.id} className="card" style={{ width: "30rem" }}>
      <img src={blog.image} className="card-img-top" alt={blog.title} />
      <div className="card-body">
        <h5 className="card-title" style={{ color: "#4169E1", fontSize:"1.5rem", marginBottom:"2rem" }} >{blog.title}</h5>
        <p
          className={`card-text ${isBlogExtended ? ".text" : "long-text"}`}
        >
          {blog.description}
        </p>
        <p className="card-text">{blog.date}</p>
        <p className="card-text" style={{ fontSize: "1.15rem", fontStyle: "italic" }}>{blog.author}</p>
        <a onClick={toggleLongText} className="btn btn-info">
          {isBlogExtended ? "Show less" : "Show more"}
        </a>
        <div className="reactions">
          <div className="Like-section">
            <button class="Btn" onClick={handleLike}>
              <span class="leftContainer">
                <svg
                  fill="white"
                  viewBox="0 0 512 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path>
                </svg>
                <span class="like">Like</span>
              </span>
              <span class="likeCount">{blog.likes}</span>
            </button>
          </div>
          {isBlogExtended ? (
            <div className="comment-section">
              <h5>Comments : </h5>
              <br />
              <input
                type="text"
                placeholder="Add a comment"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />

              <button
                onClick={handleAddComment}
                type="button"
                class="btn btn-light"
              >
                Post
              </button>

              {blog.comments.length === 0 ? (
                <p>No comments yet</p>
              ) : (
                blog.comments.map((comment, index) => {
                  return (
                    <Comments
                      comment={comment}
                      index={index}
                      isBlogExtended={isBlogExtended}
                    />
                  );
                })
              )}
            </div>
          ) : (
            ""
          )}
          <button onClick={handleDelete} class="delbutton">
            <svg viewBox="0 0 448 512" class="svgIcon">
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
