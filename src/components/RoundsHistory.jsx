import React from 'react'

function RoundsHistory({ game, rounds }) {
  const roundsList = rounds.map( (round, index) => {
    const label = (game[round.winner]) ? game[round.winner].nickname : round.result
    return (<div key={round._id}>
      <h4>Round {index + 1}</h4>
      <p>{label}</p>
    </div>)
  })

  return (
    <div className="layout-row-center">
      { roundsList }
    </div>
  )
}

export default RoundsHistory
