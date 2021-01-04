import React from "react";

// styled components
import styled from "styled-components";

// framer motion
import { motion } from "framer-motion";

// Redux
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailsAction";

const Game = ({ name, release, image, id }) => {
  const dispatch = useDispatch();

  const gameDetailsHandler = () => {
    dispatch(loadDetails(id));
  };

  return (
    <GameStyle onClick={gameDetailsHandler}>
      <h3>{name}</h3>
      <p>{release}</p>
      <img src={image} alt={name} />
    </GameStyle>
  );
};

const GameStyle = styled(motion.div)`
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  min-height: 30vh;
  text-align: center;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
