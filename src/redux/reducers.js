import { combineReducers } from 'redux'

import users from './users/redurer'
import games from './games/redurer'

const reducer = combineReducers({
  users,
  games
})

export default reducer