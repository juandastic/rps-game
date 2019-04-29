import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import * as gameActions from '../redux/game/actions'

class FinishGamePage extends Component {

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

  handleNewGame = () => {
    this.props.actions.updateGameAction({});
  }

  render() {
    const { game } = this.props
    if (!game._id){
      return  (<Redirect to="/" />)
    } else if (!game.winner) {
      return  (<Redirect to={`/play/${game._id}`} />)
    }

    return (
      <div>
        <h1>The Winner is {game.winner.nickname}</h1>
        <button className="btn-action" onClick={this.handleNewGame}>
          Start new Game
        </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(FinishGamePage)
