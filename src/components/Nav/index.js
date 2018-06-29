import React from 'react'
import {Link} from 'react-router'
import {toggleNav} from '../../actions'

require('./style.scss')

class Nav extends React.Component {
  toggleNav() {
    this.props.dispatch(toggleNav(false))
  }
  render() {
    let displayNav = window.innerWidth < "941"
        ? (
          window.innerWidth > "563"
          ? "block"
          : (
            this.props.isNavActive
            ? "block"
            : "none")
          : "block")
        : "inline-block",
      height = window.innerWidth < "941"
        ? (
          window.innerWidth > "563"
          ? "auto"
          : (
            this.props.isNavActive
            ? "100%"
            : "0")
          : "block")
        : "auto"

    return (<nav style={{
        display: displayNav,
        height: height
      }}>
      <ul>
        <li>
          <Link to="/" onClick={this.toggleNav.bind(this)}>Home</Link>
        </li>
        <li>
          <Link to="/gallery/" onClick={this.toggleNav.bind(this)}>Gallery</Link>
        </li>
        <li>
          <Link to="/flavours/" onClick={this.toggleNav.bind(this)}>Suggested Flavours</Link>
        </li>
        <li>
          <Link to="/reviews/" onClick={this.toggleNav.bind(this)}>Reviews</Link>
        </li>
        <li>
          <Link to="/contact/" onClick={this.toggleNav.bind(this)}>Contact</Link>
        </li>
      </ul>
    </nav>)
  }
}

export default Nav
