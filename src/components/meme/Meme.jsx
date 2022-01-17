import React from "react";
import "./meme.css";
const Meme = () => {
  return (
    <div className="meme">
      <form action="" method="get">
        <div className="meme-input">
          <input type="text" placeholder="shut the fuck up" />
          <input type="text" placeholder="shut the fuck up" />
        </div>
        <div className="meme-div-btn">
          <button type="submit" className="new-meme-btn">
            Get a new meme image
          </button>
        </div>
      </form>
    </div>
  );
};

export default Meme;
