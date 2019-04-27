import React, { Component } from 'react'
import { connect } from 'react-redux'

export class StartGamePage extends Component {
  render() {
    return (
      <div>
        <h1>Start Game</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(StartGamePage)
