import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import  * as gameActions from '../redux/game/actions'

import RoundView from '../components/RoundView'

import './PlayGamePage.scss'
import RoundsHistory from '../components/RoundsHistory';

class PlayGamePage extends Component {

  componentWillMount = () => {
    const {
      game,
      match: {
        params: {id}
      }
    } =  this.props

    if (!game._id) {
      this.props.actions.getGame(id)
    }
  }

  handleSendRound = (round) => {
    const { game } =  this.props
    this.props.actions.createRound(game._id, round)
  }

  render() {
    const { game } = this.props

    if (!game._id) {
      return  (<Redirect to="/" />)
    } else if (game.winner) {
      return  (<Redirect to={`/finish/${game._id}`} />)
    }

    return (
      <div className="PlayGamePage">
        <h1>Let's Started</h1>
        <p>The first player with {game.target} victories will be the Winner!</p>
        <p>Round {game.rounds.length + 1}</p>
        <RoundView
          game={game}
          handleSendRound={this.handleSendRound} />
        <RoundsHistory
          game={game}
          rounds={game.rounds} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(gameActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayGamePage)
