
import { DISPLAY_ERROR, HIDE_ERROR } from './actions'

const initialDataState = {
    displayError: false,
    errorContent: {}
};

export default (state = initialDataState, action) => {
  switch (action.type) {
    case DISPLAY_ERROR: {
      return {
        displayError: true,
        errorContent: {
          ...action.payload
        }
      }
    }
    case HIDE_ERROR: {
      return {
        displayError: false,
        errorContent: {}
      }
    }
    default:
      return state
  }
}