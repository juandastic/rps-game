import Axios from 'axios';

const BASE_API_URL = 'http://localhost:8080'

/*
 * action types
 */

export const START_GAME = 'START_GAME'

/*
 * action creators
 */

export function startGameAction(data) {
  return { type: START_GAME, payload: data }
}

/*
 * Async action dispatchers
 */

export function createGame(players) {
  return async (dispatch) => {
    const result = await Axios.post(`${BASE_API_URL}/games/`, players);
    dispatch(startGameAction(result.data));
  }
}