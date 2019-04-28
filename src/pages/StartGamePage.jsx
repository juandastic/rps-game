import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import  * as gameActions from '../redux/game/actions'

import './StartGamePage.scss'

class StartGamePage extends Component {
  state = {
    player1: '',
    player2: ''
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    this.props.actions.createGame(this.state)
    event.preventDefault()
  }

  render() {
    const { game } = this.props

    if (game._id) {
      return  (<Redirect to={`/play/${game._id}`} />)
    }

    return (
      <div className="StartGamePage">
        <h1>Welcome to Rock, Paper, Scissor Game</h1>
        <p>Enter the nickname of the two players to start playing</p>
        <form action="" className="layout-column" onSubmit={this.handleSubmit}>
          <div className="inputs-row">
            <div className="input-column">
              <label htmlFor="player1">Player 1</label>
              <input
                type="text"
                placeholder="Enter your NickName"
                name="player1"
                id="player1"
                value={this.state.player1}
                onChange={this.handleInputChange} />
            </div>
            <div className="input-column">
              <label htmlFor="player2">Player 2</label>
              <input
                type="text"
                placeholder="Enter your NickName"
                name="player2"
                id="player2"
                value={this.state.player2}
                onChange={this.handleInputChange} />
            </div>
          </div>
          <div className="actions-row">
            <input
              className="btn"
              type="submit"
              value="Start" />
          </div>
        </form>
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
