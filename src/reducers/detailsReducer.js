const initState = {
  game: {},
  screens: {},
};

const gameDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GAME_DETAILS":
      return {
        ...state,
        game: action.payload.game,
        screens: action.payload.gamescreens,
      };

    default:
      return { ...state };
  }
};

export default gameDetailsReducer;
