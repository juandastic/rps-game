import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import  * as boardActions from '../redux/board/actions'
import './ScoreBoard.scss'

class ScoreBoard extends Component {
  componentWillMount = () => {
    this.props.actions.getBoard()
  }

  render() {
    return (
      <div className="ScoreBoard">
        <h1>Score Board</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nickname</th>
              <th>Games Won</th>
            </tr>
          </thead>
          <tbody>
            {this.props.board.map((user, index)=>{
              return (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.nickname}</td>
                  <td>{user.games.length}</td>
                </tr>)
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    board: state.board,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(boardActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard)
