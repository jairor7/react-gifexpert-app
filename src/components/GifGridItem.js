import React from "react";

const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeInRight animate__delay-2s">
      <p>{title}</p>
      <img src={url} alt={title} />
    </div>
  );
};

export default GifGridItem;