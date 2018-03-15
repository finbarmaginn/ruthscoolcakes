import React from 'react'
import {Link} from 'react-router'
import Nav from '../Nav'
import NavBurger from '../NavBurger'
require('../../scss/style.scss')

require("./style.scss")

// TODO: @connect

class Header extends React.Component {
  renderNav() {
    let {isNavActive, dispatch} = this.props
    return (<Nav isNavActive={isNavActive} dispatch={dispatch}></Nav>)
  }
  render() {
    let {isNavActive, dispatch} = this.props

    return (<header>
      <div className="wrapper">
        <div className="logo">
          <Link to="/">
            <img src={require('../../imgs/logo.png')} className="logoImg"/>
            <h1>Ruth's Cool Cakes</h1>
          </Link>
        </div>
        <NavBurger dispatch={dispatch} isNavActive={isNavActive}></NavBurger>
        {this.renderNav()}
      </div>
    </header>)
  }
}

export default Header
