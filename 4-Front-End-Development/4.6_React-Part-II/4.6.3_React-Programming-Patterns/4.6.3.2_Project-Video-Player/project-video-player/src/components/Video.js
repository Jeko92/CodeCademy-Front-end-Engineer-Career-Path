import React from "react";

function Video({ src }) {
  return (
    <div>
      {/* <video src={src} controls autostart={true} autoPlay muted /> */}
      <video src={src} controls autoPlay muted />
    </div>
  );
}
export default Video;
