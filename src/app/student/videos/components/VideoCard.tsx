"use client";

import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { VideoProps } from "../../../../../src/types/videotypes";

const VideoCard: React.FC<VideoProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const { ref: viewRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const updateProgress = () => {
        const percent = (video.currentTime / video.duration) * 100;
        setProgress(percent);
      };

      video.addEventListener("timeupdate", updateProgress);

      return () => {
        video.removeEventListener("timeupdate", updateProgress);
      };
    }
  }, []);

  useEffect(() => {
    if (inView) {
      videoRef.current?.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  }, [inView]);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(false);
    } else {
      videoRef.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      ref={viewRef}
      className="relative flex flex-col items-center mx-auto my-10 justify-center h-[742px] w-[393px] snap-center"
    >
      <video
        ref={videoRef}
        src={src}
        className="h-full w-full object-cover rounded-xl"
        loop
        onClick={togglePlay}
      ></video>
      <input
        type="range"
        value={progress}
        className="w-full bg-black accent-yellow-500"
        onChange={(e) => {
          const video = videoRef.current;
          if (video) {
            video.currentTime = (video.duration * Number(e.target.value)) / 100;
          }
        }}
      />
    </div>
  );
};

export default VideoCard;
