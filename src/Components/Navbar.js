import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class Navbar extends Component {

  render() {
    return (
      <nav className='navbar'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leaderboard
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              Add
            </NavLink>
          </li>
        </ul>
      </nav>)
  }

}

export default Navbar