import React from 'react'
import {toggleViewer} from '../../actions'
import Loader from '../Loader'

require('./style.scss')

class Viewer extends React.Component {
  handleClose() {
    this.props.dispatch(toggleViewer("", this.props.isActive))
  }
  render() {
    let dynamicHeight = window.innerWidth > 442
        ? 67
        : 45,
      dynamicWidth = window.innerWidth > 442
        ? (5 * 2)
        : (5 * 2);
    return (<div id="viewer" onClick={this.handleClose.bind(this)}>
      <section className="wrapper" style={{
          textAlign: "center",
          position: "relative",
          height: "100%"

        }}>
        <button className="closeViewer" onClick={this.handleClose.bind(this)}>
          <div></div>
          <div></div>
        </button>
        <Loader style={{
            margin: "0",
            position: "absolute",
            top: "calc(33.333% - 20px)"
          }}/>
        <img style={{
            maxHeight: window.innerHeight - dynamicHeight + "px",
            maxWidth: window.innerWidth - dynamicWidth + "px"
          }} src={this.props.src}/>
      </section>
    </div>)
  }
}

export default Viewer
