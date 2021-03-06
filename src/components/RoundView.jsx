import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import './RoundView.scss'

import RoundForm from './RoundForm'

class RoundView extends Component {
  state = {
    loading: false,
    currentPlayer: 'player1',
    player1: {
      nickname: this.props.game.player1.nickname,
      optionSelected: ''
    },
    player2: {
      nickname: this.props.game.player2.nickname,
      optionSelected: ''
    }
  }

  componentDidUpdate = (prevProps) => {
    //Reset the round state when the game is updated
    if (prevProps.game.rounds.length !== this.props.game.rounds.length) {
      this.setState((state)=>{
        return {
          ...state,
          currentPlayer: 'player1',
          player1: {
            ...state.player1,
            optionSelected: ''
          },
          player2: {
            ...state.player2,
            optionSelected: ''
          }
        }
      })
    }
  }

  //Save the current player option and update the currentPlayer to the next one
  _changeState = state => {
    return {
      loading: false,
      currentPlayer: 'player2',
      [state.currentPlayer]: {
        ...state[state.currentPlayer],
        optionSelected: this.optionSelected
      }
    }
  }
  //Check if the two player already have seleted options and send the round info
  _checkRoundStatus = () => {
    const { player1, player2 } = this.state

    if (player1.optionSelected && player2.optionSelected) {
        const round = {
          move_player1: player1.optionSelected,
          move_player2: player2.optionSelected
        }
        this.props.handleSendRound(round)
    }
  }

  handleSelectOption = (option) => {
    this.setState({
      loading: true
    })
    this.optionSelected = option
    setTimeout(() => {
      this.setState(this._changeState, this._checkRoundStatus);
    }, 400);
  }

  render() {
    const { currentPlayer, loading } = this.state

    if(loading) {
      return (<div className="loading-spinner">
        <FontAwesomeIcon className="fa-spin" icon={faSpinner} />
      </div>)
    }

    return (
      <div className="RoundView">
        <RoundForm
          handleSelectOption={this.handleSelectOption}
          player={this.state[currentPlayer]} />
      </div>
    )
  }
}

export default RoundView
