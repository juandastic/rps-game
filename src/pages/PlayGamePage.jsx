import React, { Component } from 'react'
import { connect } from 'react-redux'

class PlayGamePage extends Component {
  render() {
    return (
      <div>
        <h1>Play Game</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayGamePage)
