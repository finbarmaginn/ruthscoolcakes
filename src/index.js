import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {appResize, toggleNav} from './actions'
import {connect} from 'react-redux'

@connect((store) => {
  return {windowWidth: store.general.windowWidth, isNavMobile: store.general.isNavMobile, isNavActive: store.general.isNavActive}
})

class App extends React.Component {
  closeNav() {
    this.props.dispatch(toggleNav(false));
  }
  viewerResize() {
    this.props.dispatch(appResize(
      window.innerWidth, window.innerWidth <= 540
      ? true
      : false));
    let {isNavActive, isNavMobile} = this.props;
    if (!isNavMobile && isNavActive) {
      this.props.dispatch(toggleNav(false))
    }
  }

  componentWillMount() {
    this.viewerResize();
    window.addEventListener("resize", this.viewerResize.bind(this));
  }

  render() {
    let {tooltipActive, isNavMobile, isNavActive, dispatch} = this.props
    return (<div>
      <Header isNavMobile={isNavMobile} isNavActive={isNavActive} tooltipActive={tooltipActive} dispatch={dispatch}/> {this.props.children}
      <Footer/>
      <div style={{
          position: "fixed",
          bottom: "0",
          borderTop: "solid 1px white",
          boxShadow: "0 -3.5px 7px rgba(0, 0, 0, 0.3)",
          width: "100%"
        }}></div>
    </div>)
  }
}

export default App
