import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors } from '@fortawesome/free-solid-svg-icons'

import './RoundForm.scss'

function RoundForm({player, handleSelectOption}) {
  return (
    <div className="RoundForm">
      <h2> {player.nickname}'s turn </h2>

      <button className="option-btn" onClick={handleSelectOption.bind(null,'ROCK')}>
        <FontAwesomeIcon icon={faHandRock} />
      </button>
      <button className="option-btn" onClick={handleSelectOption.bind(null,'PAPER')}>
        <FontAwesomeIcon icon={faHandPaper} />
      </button>
      <button className="option-btn" onClick={handleSelectOption.bind(null,'SCISSORS')}>
        <FontAwesomeIcon icon={faHandScissors} />
      </button>
    </div>
  )
}

export default RoundForm
