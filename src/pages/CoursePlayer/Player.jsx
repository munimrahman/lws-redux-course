import React from "react";

const Player = ({ url, title }) => {
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src={url}
      title={title}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
};

export default Player;
