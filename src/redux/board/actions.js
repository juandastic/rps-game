import Axios from 'axios'

import { BASE_API_URL } from '../../config'
import { displayErrorAction } from '../error/actions'


/*
 * action types
 */

export const UPDATE_BOARD = 'UPDATE_BOARD'

/*
 * action creators
 */

export function updateBoardAction(data) {
  return { type: UPDATE_BOARD, payload: data }
}

/*
 * Async action dispatchers
 */

export function getBoard(id) {
  return async (dispatch) => {
    try {
      const result = await Axios.get(`${BASE_API_URL}/score-board`)
      dispatch(updateBoardAction(result.data))
    } catch (error) {
      dispatch(displayErrorAction(error))
    }
  }
}
