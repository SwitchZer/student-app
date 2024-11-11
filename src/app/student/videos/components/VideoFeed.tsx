import React from "react";
import VideoCard from "./VideoCard";
import { VideoProps } from "../../../../../src/types/videotypes";

const videoData: VideoProps[] = [
  { src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { src: "https://www.w3schools.com/html/movie.mp4" },
  // Add more video URLs here
];

const VideoFeed: React.FC = () => {
  return (
    <div className="overflow-y-auto snap-y snap-mandatory h-screen">
      {videoData.map((video, index) => (
        <VideoCard key={index} src={video.src} />
      ))}
    </div>
  );
};

export default VideoFeed;
