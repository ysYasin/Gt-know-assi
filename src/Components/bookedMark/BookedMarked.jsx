import React from "react";
import "./BookedMarked.css";

const BookedMarked = ({ bookMark }) => {
  return (
    <div className="bookmark">
      <h1>{bookMark}</h1>
    </div>
  );
};

export default BookedMarked;
