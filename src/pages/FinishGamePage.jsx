import React, { Component } from 'react'
import { connect } from 'react-redux'

class FinishGamePage extends Component {
  render() {
    return (
      <div>
        <h1>Finish Game</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(FinishGamePage)
