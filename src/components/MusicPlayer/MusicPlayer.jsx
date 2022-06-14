import React from "react";

import bachDrill from "../../asset/music/bachDrill.webm";

import { useAudio } from "../../hook/useAudio";
import styled from "styled-components";
import { BsMusicNoteBeamed } from "react-icons/bs";

const MusicPlayerStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.darkBlueColor};
  padding: 0.5rem 1rem;
  border: none;
  color: #fff;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 1);
  border-radius: 4px;
  position: fixed;
  left: 20px;
  top: 30px;
  outline: none;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  &.active {
    border: 1px solid #fff;
    color: ${({ theme }) => theme.colors.secondary};
    background-color: transparent;
  }
  &:hover {
    box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, 1);
  }
`;

const MusicPlayer = () => {
  const [isPlaying, toggle, audio] = useAudio(bachDrill);
  return (
    <MusicPlayerStyled
      onClick={() => toggle()}
      className={isPlaying && "active"}
    >
      <BsMusicNoteBeamed />
    </MusicPlayerStyled>
  );
};

export default MusicPlayer;
