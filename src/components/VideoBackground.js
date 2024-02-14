import React from "react";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";
const VideoBackground = ({ movieId }) => {
	const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
	useTrailerVideo(movieId)
  return (
    <div className="brightness-[0.8]">
      <iframe
        className="w-full aspect-video mt-[-5%]"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1&rel=0&controls=0&showinfo=0&loop=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
