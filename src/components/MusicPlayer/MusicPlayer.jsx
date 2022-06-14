import React from "react";

import music1 from "../../asset/music/music1.mp3";
import { useAudio } from "../../hook/useAudio";

const MusicPlayer = () => {
  useAudio(music1);
  return <></>;
};

export default MusicPlayer;
