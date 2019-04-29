import React from 'react'
import {NavLink}  from 'react-router-dom'

import './Header.scss'

export default function Header() {
  return (
    <div className="Header">
      <div className="Header-title">
        Rock - Paper - Scissors Game
      </div>
      <nav className="Header-nav">
        <ul>
          <li><NavLink to="/" exact >Play Game</NavLink></li>
          <li><NavLink to="/score-board" >Score Board</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}
