import React from "react";
import Blog from "./Blog";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BlogList = ({ blogs, setBlogs }) => {
  const [isLongTextExpanded, setLongTextExpanded] = useState(false);

  const toggleLongText = () => {
    setLongTextExpanded(!isLongTextExpanded);
  };

  return (
    <>
    <h2 className="title-list">Explore the World Through Our Traveler's Eyes: A Collection of Diverse Travel Blogs</h2>
    <div className="listBlogs">
        <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://media.istockphoto.com/id/1145422105/photo/eiffel-tower-aerial-view-paris.jpg?s=612x612&w=0&k=20&c=sFn6FwTJR0TpX3rP_W4VHrbkTB__6l5kr-lkkqdYrtE="
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title ">My trip to paris</h5>
          <p
            className={`card-text ${
              isLongTextExpanded ? ".text" : "long-text"
            }`}
          >
            Embarking on a personal journey through the enchanting streets of
            Paris was a dream come true. From savoring delectable pastries in
            Montmartre to gazing at the shimmering lights from the Eiffel Tower,
            my Paris adventure was a tapestry of unforgettable moments. I roamed
            through the Louvre's hallowed halls, got lost in charming bookshops
            along the Seine, and felt the city's heartbeat in its quaint cafes.
            Paris became more than a destination; it became a part of me,
            etching its beauty, history, and spirit into my very being. Join me
            as I share the tales of my Parisian escapade, a journey that left an
            indelible mark on my heart.
          </p>
          <p className="card-text">1/03/23</p>
          <p className="card-text">Nawfal Sentissi</p>
          <button onClick={toggleLongText} className="btn btn-info">
            {isLongTextExpanded ? "Show less" : "Show more"}
          </button>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://media.istockphoto.com/id/1145422105/photo/eiffel-tower-aerial-view-paris.jpg?s=612x612&w=0&k=20&c=sFn6FwTJR0TpX3rP_W4VHrbkTB__6l5kr-lkkqdYrtE="
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title ">My trip to paris</h5>
          <p
            className={`card-text ${
              isLongTextExpanded ? ".text" : "long-text"
            }`}
          >
            Embarking on a personal journey through the enchanting streets of
            Paris was a dream come true. From savoring delectable pastries in
            Montmartre to gazing at the shimmering lights from the Eiffel Tower,
            my Paris adventure was a tapestry of unforgettable moments. I roamed
            through the Louvre's hallowed halls, got lost in charming bookshops
            along the Seine, and felt the city's heartbeat in its quaint cafes.
            Paris became more than a destination; it became a part of me,
            etching its beauty, history, and spirit into my very being. Join me
            as I share the tales of my Parisian escapade, a journey that left an
            indelible mark on my heart.
          </p>
          <p className="card-text">1/03/23</p>
          <p className="card-text">Nawfal Sentissi</p>
          <button onClick={toggleLongText} className="btn btn-info">
            {isLongTextExpanded ? "Show less" : "Show more"}
          </button>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://media.istockphoto.com/id/1145422105/photo/eiffel-tower-aerial-view-paris.jpg?s=612x612&w=0&k=20&c=sFn6FwTJR0TpX3rP_W4VHrbkTB__6l5kr-lkkqdYrtE="
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title ">My trip to paris</h5>
          <p
            className={`card-text ${
              isLongTextExpanded ? ".text" : "long-text"
            }`}
          >
            Embarking on a personal journey through the enchanting streets of
            Paris was a dream come true. From savoring delectable pastries in
            Montmartre to gazing at the shimmering lights from the Eiffel Tower,
            my Paris adventure was a tapestry of unforgettable moments. I roamed
            through the Louvre's hallowed halls, got lost in charming bookshops
            along the Seine, and felt the city's heartbeat in its quaint cafes.
            Paris became more than a destination; it became a part of me,
            etching its beauty, history, and spirit into my very being. Join me
            as I share the tales of my Parisian escapade, a journey that left an
            indelible mark on my heart.
          </p>
          <p className="card-text">1/03/23</p>
          <p className="card-text">Nawfal Sentissi</p>
          <button onClick={toggleLongText} className="btn btn-info">
            {isLongTextExpanded ? "Show less" : "Show more"}
          </button>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://media.istockphoto.com/id/1145422105/photo/eiffel-tower-aerial-view-paris.jpg?s=612x612&w=0&k=20&c=sFn6FwTJR0TpX3rP_W4VHrbkTB__6l5kr-lkkqdYrtE="
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title ">My trip to paris</h5>
          <p
            className={`card-text ${
              isLongTextExpanded ? ".text" : "long-text"
            }`}
          >
            Embarking on a personal journey through the enchanting streets of
            Paris was a dream come true. From savoring delectable pastries in
            Montmartre to gazing at the shimmering lights from the Eiffel Tower,
            my Paris adventure was a tapestry of unforgettable moments. I roamed
            through the Louvre's hallowed halls, got lost in charming bookshops
            along the Seine, and felt the city's heartbeat in its quaint cafes.
            Paris became more than a destination; it became a part of me,
            etching its beauty, history, and spirit into my very being. Join me
            as I share the tales of my Parisian escapade, a journey that left an
            indelible mark on my heart.
          </p>
          <p className="card-text">1/03/23</p>
          <p className="card-text">Nawfal Sentissi</p>
          <button onClick={toggleLongText} className="btn btn-info">
            {isLongTextExpanded ? "Show less" : "Show more"}
          </button>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://media.istockphoto.com/id/1145422105/photo/eiffel-tower-aerial-view-paris.jpg?s=612x612&w=0&k=20&c=sFn6FwTJR0TpX3rP_W4VHrbkTB__6l5kr-lkkqdYrtE="
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title ">My trip to paris</h5>
          <p
            className={`card-text ${
              isLongTextExpanded ? ".text" : "long-text"
            }`}
          >
            Embarking on a personal journey through the enchanting streets of
            Paris was a dream come true. From savoring delectable pastries in
            Montmartre to gazing at the shimmering lights from the Eiffel Tower,
            my Paris adventure was a tapestry of unforgettable moments. I roamed
            through the Louvre's hallowed halls, got lost in charming bookshops
            along the Seine, and felt the city's heartbeat in its quaint cafes.
            Paris became more than a destination; it became a part of me,
            etching its beauty, history, and spirit into my very being. Join me
            as I share the tales of my Parisian escapade, a journey that left an
            indelible mark on my heart.
          </p>
          <p className="card-text">1/03/23</p>
          <p className="card-text">Nawfal Sentissi</p>
          <button onClick={toggleLongText} className="btn btn-info">
            {isLongTextExpanded ? "Show less" : "Show more"}
          </button>
        </div>
      </div>

      {blogs.map((blog) => {
        return (
          <Blog
            key={Date.now()}
            blog={blog}
            blogs={blogs}
            setBlogs={setBlogs}
            isLongTextExpanded={isLongTextExpanded}
            setLongTextExpanded={setLongTextExpanded}
            toggleLongText={toggleLongText}
          />
        );
      })}
    </div>
    </>
  );
};

export default BlogList;
