import { combineReducers } from 'redux'

import error from './error/redurer'
import game from './game/redurer'
import board from './board/redurer'

const reducer = combineReducers({
  game,
  board,
  error
})

export default reducer