import { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";

// styled components
import styled from "styled-components";

// Framer motion
import { motion } from "framer-motion";

// components
import Game from "../components/Game";

const Home = () => {
  const dispatch = useDispatch();

  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  return (
    <GameList>
      <h2>upcoming games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            release={game.released}
            image={game.background_image}
            id={game.id}
            key={game.id}
          />
        ))}
      </Games>

      <h2>popular games</h2>
      <Games>
        {popular.map((game) => (
          <Game
            name={game.name}
            release={game.released}
            image={game.background_image}
            id={game.id}
            key={game.id}
          />
        ))}
      </Games>

      <h2>new games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            release={game.released}
            image={game.background_image}
            id={game.id}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0 3rem;
  h2 {
    padding: 2rem 0;
  }

  @media (max-width: 576px) {
    padding: 0 5px;
  }
`;

const Games = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 3rem;
  min-height: 80vh;

  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  }
`;

export default Home;
