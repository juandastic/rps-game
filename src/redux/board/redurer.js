
import { UPDATE_BOARD } from './actions'

const initialDataState = []

export default (state = initialDataState, action) => {
  switch (action.type) {
    case UPDATE_BOARD: {
      const board = action.payload;
      return [
        ...board
      ]
    }
    default:
      return state
  }
}