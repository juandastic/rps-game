import React, { Component } from 'react'

import './StartGameForm.scss';

class StartGameForm extends Component {
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

  onSubmitHandle = (event) => {
    this.props.handleSubmit(this.state)
    event.preventDefault()
  }

  render() {
    return (
      <div className="StartGameForm">
        <form className="layout-column" onSubmit={this.onSubmitHandle}>
          <div className="inputs-row">
            <div className="input-column">
              <label htmlFor="player1">Player 1</label>
              <input
                required
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
                required
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
                className="btn-action"
                type="submit"
                value="Start" />
            </div>
        </form>
      </div>
    )
  }
}

export default StartGameForm
