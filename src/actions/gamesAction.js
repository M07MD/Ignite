import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

// Action Creator
export const loadGames = () => async (dispatch) => {
  const popularGames = await axios.get(popularGamesURL());
  const newGames = await axios.get(newGamesURL());
  const upcomingGames = await axios.get(upcomingGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGames.data.results,
      newGames: newGames.data.results,
      upcoming: upcomingGames.data.results,
    },
  });
};
