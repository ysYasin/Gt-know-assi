import React from "react";
import "./Asaid.css";
import BookedMarked from "../bookedMark/BookedMarked";

const Asaid = (props) => {
  const { readTime, bookMark } = props;
  let readingTime = 0;

  for (let singleTi of readTime) {
    readingTime += +singleTi;
  }

  return (
    <div className="asaid">
      <div className="spand-time">
        <h3>Span Time On Read: {readingTime} min</h3>
      </div>
      <div id="_bm" className="booked-mark">
        <h3> Book Mark Items !</h3>
        {bookMark.map((bm) => (
          <BookedMarked key={bm} bookMark={bm}></BookedMarked>
        ))}
      </div>
    </div>
  );
};

export default Asaid;
