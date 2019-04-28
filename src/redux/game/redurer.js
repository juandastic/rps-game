
import { START_GAME } from './actions'

const initialDataState = {
  game: {},
  players: {}
}

export default (state = initialDataState, action) => {
  switch (action.type) {
    case START_GAME: {
      const data = action.payload;
      return {
        game: {
          ...data.game
        },
        players: {
          ...data.players
        }
      }
    }
    default:
      return state
  }
}