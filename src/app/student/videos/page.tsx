"use client";
import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";

const VideoPage = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const playerRef = useRef<ReactPlayer>(null);

  const dummyVideos = [
    {
      id: 1,
      url: "/images/student/test2.mp4",
      username: "@user123",
      description: "This is a cool video #trending",
      likes: "10.5K",
    },
    {
      id: 2,
      url: "/images/student/test2.mp4",
      username: "@user456",
      description: "Another cool video #viral",
      likes: "20.5K",
    },
  ];

  const handleProgress = (state: { played: number }) => {
    setProgress(state.played * 100);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const videoHeight = container.clientHeight;
    const scrollPosition = container.scrollTop;
    const index = Math.round(scrollPosition / videoHeight);

    if (currentVideoIndex !== index) {
      setCurrentVideoIndex(index);
      setIsPlaying(true); // Auto-play the video that's in view
    }
  };

  return (
    <div
      className="h-screen w-full overflow-y-scroll snap-y snap-mandatory"
      onScroll={handleScroll}
    >
      {dummyVideos.map((video, index) => (
        <div
          key={video.id}
          className="relative w-full h-screen snap-start snap-always"
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="relative w-full h-[742px] max-w-3xl max-h-[90vh] rounded-2xl overflow-hidden">
              {/* Blurry background */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: `url(${video.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "blur(20px)",
                  transform: "scale(1.1)",
                }}
              />
              {/* Overlay to darken the blurred background */}
              <div className="absolute inset-0 bg-black/40 z-0" />

              {/* Existing ReactPlayer component */}
              <ReactPlayer
                ref={index === currentVideoIndex ? playerRef : null}
                url={video.url}
                playing={index === currentVideoIndex && isPlaying}
                loop={true}
                width="100%"
                height="100%"
                onClick={() => setIsPlaying(!isPlaying)}
                onProgress={
                  index === currentVideoIndex ? handleProgress : undefined
                }
                progressInterval={100}
                className="!absolute top-0 left-0 z-10"
              />

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600/50 z-10">
                <div
                  className="h-full bg-white transition-all duration-100"
                  style={{
                    width: `${index === currentVideoIndex ? progress : 0}%`,
                  }}
                />
              </div>

              {/* Play/Pause overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center z-10"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {!isPlaying && index === currentVideoIndex && (
                  <div className="bg-black/20 p-4 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-white/80"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Video overlay with user info and actions */}
              <div className="absolute bottom-0 left-0 right-0 p-4 pb-6 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10">
                <div className="text-white">
                  <p className="font-bold">{video.username}</p>
                  <p className="text-sm">{video.description}</p>
                  <p className="text-sm text-gray-300">{video.likes} likes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoPage;
