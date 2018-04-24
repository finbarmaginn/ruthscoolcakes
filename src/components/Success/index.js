import React from 'react'

require('./style.scss')

class Success extends React.Component {
  render() {
    return (<span className="checkmark" style={this.props.style}>
      <div className="checkmark_circle"></div>
      <div className="checkmark_stem"></div>
      <div className="checkmark_kick"></div>
    </span>)
  }
}

export default Success
