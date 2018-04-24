import React from 'react'

require('./style.scss')

class StatusError extends React.Component {
  render() {
    return (<span className="error_checkmark" style={this.props.style}>
      <div className="error_checkmark_circle"></div>
      <div className="error_checkmark_stem"></div>
      <div className="error_checkmark_kick"></div>
    </span>)
  }
}

export default StatusError
