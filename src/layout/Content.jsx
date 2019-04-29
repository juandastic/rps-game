import React from 'react'
import { Route } from 'react-router-dom';

import StartGamePage from '../pages/StartGamePage'
import PlayGamePage from '../pages/PlayGamePage'
import FinishGamePage from '../pages/FinishGamePage'
import ScoreBoard from '../pages/ScoreBoard'

import './Content.scss'

export default function Content() {
  return (
    <div className="Content">
      <Route path="/" exact component={StartGamePage} />
      <Route path="/play/:id" component={PlayGamePage} />
      <Route path="/finish/:id" component={FinishGamePage} />
      <Route path="/score-board" component={ScoreBoard} />
    </div>
  )
}
