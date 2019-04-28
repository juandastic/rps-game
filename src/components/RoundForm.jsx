import React from 'react'

function RoundForm({player, handleSelectOption}) {
  return (
    <div className="RoundForm">
      <h2> {player.nickname}'s turn </h2>

      <button className="option-btn" onClick={handleSelectOption.bind(null,'ROCK')}>
        Rock
      </button>
      <button className="option-btn" onClick={handleSelectOption.bind(null,'PAPER')}>
        Paper
      </button>
      <button className="option-btn" onClick={handleSelectOption.bind(null,'SCISSORS')}>
        Scissors
      </button>
    </div>
  )
}

export default RoundForm
