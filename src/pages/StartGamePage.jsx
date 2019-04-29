import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import  * as gameActions from '../redux/game/actions'

import './StartGamePage.scss'
import StartGameForm from '../components/StartGameForm';

class StartGamePage extends Component {
  handleSubmit = (form) => {
    this.props.actions.createGame(form)
  }

  render() {
    const { game } = this.props

    if (game._id) {
      return  (<Redirect to={`/play/${game._id}`} />)
    }

    return (
      <div className="StartGamePage">
        <h1>Welcome to Rock - Paper - Scissor Game</h1>
        <p>Enter the nickname of the two players to start playing</p>
        <StartGameForm handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(gameActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartGamePage)
