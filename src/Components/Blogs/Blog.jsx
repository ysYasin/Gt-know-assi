import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./Blog.css";

const Blog = (props) => {
  const { imgTitle, title, img, name, releaseDate, readingTime, tags } =
    props.blog;
  const readingTimeSend = props.readingTime;
  /// send heading (data) to parent components
  const bookedItem = props.bookedItem;
  return (
    <div className="blog-thumb-container">
      <div className="blog-thumb">
        <img src={imgTitle} alt={title} />
      </div>
      <div className="blog-body">
        <div className="bloger-info-and-bookMark">
          <div className="profile-and-time">
            <img src={img} alt="" />
            <div className="name-time">
              <h3>{name}</h3>
              <small>{releaseDate}</small>
            </div>
          </div>
          <div className="book-mark">
            <p>{readingTime} min read</p>
            <button onClick={() => bookedItem(title)}>
              <FontAwesomeIcon icon={faBookmark} />
            </button>
          </div>
        </div>
        <div className="blog-title">
          <h1>{title}</h1>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "20%",
            color: "#6a6a6a87",
            marginBottom: "1rem",
          }}
        >
          <p>{"#" + tags[0]}</p>
          <p>{"#" + tags[1]}</p>
        </div>
        <a
          className="mark"
          onClick={() => readingTimeSend(readingTime)}
          style={{ margin: "1rem 0.5rem" }}
        >
          Mark as read
        </a>
      </div>
    </div>
  );
};

export default Blog;
