import Axios from 'axios'

import { BASE_API_URL } from '../../config'
import { displayErrorAction } from '../error/actions'


/*
 * action types
 */

export const UPDATE_GAME = 'UPDATE_GAME'

/*
 * action creators
 */

export function updateGameAction(data) {
  return { type: UPDATE_GAME, payload: data }
}

/*
 * Async action dispatchers
 */

export function createGame(players) {
  return async (dispatch) => {
    try {
      const result = await Axios.post(`${BASE_API_URL}/games/`, players)
      dispatch(updateGameAction(result.data))
    } catch (error) {
      dispatch(displayErrorAction(error))
    }
  }
}

export function getGame(id) {
  return async (dispatch) => {
    try {
      const result = await Axios.get(`${BASE_API_URL}/games/${id}`)
      dispatch(updateGameAction(result.data))
    } catch (error) {
      dispatch(displayErrorAction(error))
    }
  }
}

export function createRound(id, round) {
  return async (dispatch) => {
    try {
      const result = await Axios.post(`${BASE_API_URL}/games/${id}/round`, round)
      dispatch(updateGameAction(result.data))
    } catch (error) {
      dispatch(displayErrorAction(error))
    }
  }
}