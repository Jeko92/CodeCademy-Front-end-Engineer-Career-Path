import React, { useState } from "react";
// import { createRoot } from "react-dom/client";
import fastVideo from "./assets/video/react_video-fast.mp4";
import slowVideo from "./assets/video/react_video-slow.mp4";
import eekVideo from "./assets/video/react_video-eek.mp4";
import cuteVideo from "./assets/video/react_video-cute.mp4";
import Menu from "./components/Menu";
import Video from "./components/Video";

import "./App.css";

const VIDEOS = {
  fast: fastVideo,
  slow: slowVideo,
  cute: cuteVideo,
  eek: eekVideo,
};

function App() {
  const [src, setSrc] = useState(VIDEOS.fast);

  const onSelectVideoHandler = (newVideo) => {
    setSrc(VIDEOS[newVideo]);
  };
  return (
    <div>
      <h1>Video Player</h1>
      <Menu onSelectVideo={onSelectVideoHandler} />
      <Video src={src} />
    </div>
  );
}

export default App;
