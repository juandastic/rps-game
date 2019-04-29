import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEquals, faTrophy } from '@fortawesome/free-solid-svg-icons'

import './RoundsHistory.scss'

function RoundsHistory({ game, rounds }) {
  const roundsList = rounds.map( (round, index) => {
    const isTie = !(game[round.winner])
    const label = !isTie ? game[round.winner].nickname : ''
    const classList = ['round-item']

    return (<div className={classList.join(' ')} key={round._id}>
      <h4>Round {index + 1}</h4>
      { isTie && <FontAwesomeIcon icon={faEquals} />}
      { !isTie && <p> <FontAwesomeIcon icon={faTrophy} /> {label}</p> }
    </div>)
  })

  return (
    <div className="layout-row-center">
      { roundsList }
    </div>
  )
}

export default RoundsHistory
