import axios from "axios";
import { getGameDetails, gameScreens } from "../api";

export const loadDetails = (id) => async (dispatch) => {
  const detailData = await axios.get(getGameDetails(id));
  const screenshots = await axios.get(gameScreens(id));

  dispatch({
    type: "GAME_DETAILS",
    payload: {
      game: detailData.data,
      gamescreens: screenshots.data,
    },
  });
};
