import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import gameDetailsReducer from "./detailsReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  gameDetails: gameDetailsReducer,
});

export default rootReducer;
