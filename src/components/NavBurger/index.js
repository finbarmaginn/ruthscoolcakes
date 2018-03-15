import React from 'react'
import {toggleNav} from '../../actions'
require('./style.scss')

class NavBurger extends React.Component {
  toggleNav() {
    let {isNavActive} = this.props
    this.props.dispatch(toggleNav(!isNavActive));
  }

  render() {
    let {isNavActive} = this.props,
      burgerActive = isNavActive
        ? "active"
        : "";
    return (<button id="burger" className={burgerActive} onClick={this.toggleNav.bind(this)}>
      <div></div>
      <div></div>
      <div></div>
    </button>)
  }
}

export default NavBurger
