
import { UPDATE_GAME } from './actions'

const initialDataState = {}

export default (state = initialDataState, action) => {
  switch (action.type) {
    case UPDATE_GAME: {
      const game = action.payload;
      return {
        ...game
      }
    }
    default:
      return state
  }
}