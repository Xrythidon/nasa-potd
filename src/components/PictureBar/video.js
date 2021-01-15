import React from "react";

import youtube2Thumbnail from "../Utilities/youtube2Thumbnail";

const Video = ({ url, className }) => {
   const src = youtube2Thumbnail(url);

  return (
    url && (
      <img
        className={className}
        src={src}
        alt="NASA Space"
      ></img>
    )
  );
};

export default Video;
