import { useEffect, useState } from "react";

export const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
    if (!isPlaying) {
      setTimeout(() => {
        setIsPlaying(true);
      }, [1000]);
    }
  }, [isPlaying]);

  useEffect(() => {
    audio.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  });

  return [isPlaying, setIsPlaying, audio];
};
