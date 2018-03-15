import React from 'react'

require('./style.scss')

class Loader extends React.Component {
  render() {
    return (<div className="spinner" style={this.props.style}>
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>)
  }
}

export default Loader
