import React, { useEffect, useState } from "react";
import "./DataLoad.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from "../Blogs/Blog";
import Asaid from "../Asaid/Asaid";

const DataLoad = () => {
  const [Datas, setData] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);
  // finding data from Child Components and sent to asaid
  const [readTime, setReadingtime] = useState([]);
  function readingTime(time) {
    let hastime;
    const existing = readTime.find((t) => t === time);
    if (!existing) {
      hastime = [...readTime, time];
    } else {
      toast.success("🦄 This is all ready you read!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    setReadingtime(hastime);
  }
  // function to get Book mark Data to child component
  const [booking, setBooking] = useState([]);
  function bookedItem(headine) {
    let headdings;
    const existing = booking.find((t) => t === headine);
    if (!existing) {
      headdings = [...booking, headine];
    } else {
      toast.success("🦄 This is all ready on book mark!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    setBooking(headdings);
  }

  return (
    <div className="Data-container">
      <div className="blog">
        {Datas.map((data) => (
          <Blog
            bookedItem={bookedItem}
            readingTime={readingTime}
            key={data.id}
            blog={data}
          ></Blog>
        ))}
      </div>
      <div className="book-mark-section">
        <Asaid bookMark={booking} readTime={readTime}></Asaid>
        <ToastContainer />
      </div>
    </div>
  );
};

export default DataLoad;
