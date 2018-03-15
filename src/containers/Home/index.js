import React from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router'
// import {toggleTooltip} from '../actions'
// import TriangleModel from '../components/TriangleModel'
// import TriangleInfo from '../components/TriangleInfo'
// import Tooltip from '../components/Tooltip'
import Slider from '../../components/Slider'

require('./style.scss')

@connect((store) => {
  return {
    windowWidth: store.general.windowWidth
    // tooltipActive: store.triangle.tooltipActive,
    // tooltipOpacity: store.triangle.tooltipOpacity,
    // infoActive: store.triangle.infoActive,
    // infoTitle: store.triangle.infoTitle,
    // infoText: store.triangle.infoText,
    // infoClass: store.triangle.infoClass
  }
})

class Home extends React.Component {
  // componentDidMount() {
  //   if (!Boolean(localStorage.siteVisited)) {
  //     let isActive = this.props.tooltipActive
  //     this.props.dispatch(toggleTooltip(!isActive))
  //     localStorage.setItem('siteVisited', true)
  //   }
  // }
  // componentWillUnmount() {
  // let {tooltipActive} = this.props
  // if (tooltipActive)
  //   this.props.dispatch(toggleTooltip(false))
  // }
  //
  // showTooltip() {
  //   let {tooltipActive, tooltipOpacity, dispatch} = this.props
  //   if (tooltipActive)
  //     return <Tooltip dispatch={dispatch} tooltipActive={tooltipActive} tooltipOpacity={tooltipOpacity} message={"Interact with the various parts of the triangle to find out more!"}/>
  // }
  //
  // showTriangleInfo() {
  //   let {infoActive, infoTitle, infoText, infoClass, dispatch} = this.props
  //   if (infoActive)
  //     return <TriangleInfo text={infoText} title={infoTitle} className={infoClass} dispatch={dispatch}/>
  // }

  render() {
    // tooltipActive
    let {windowWidth, dispatch} = this.props
    return (<section className="wrapper" style={{
        position: "relative"
      }}>
      {/* this.showTooltip()
        <h1>Welcome</h1>
        */
      }
      <Slider/>
      <article id="home">
        <section>
          <p>
            <span style={{
                fontFamily: '"Headings", Fallback, sans-serif',
                color: '#ec4b85',
                fontSize: ""
              }}>
              Welcome{" "}
            </span>
            to the wonderful and whacky world of<br/>
          </p>
          <h3 className="miniLogo"><img src={require('../../imgs/logo.png')} style={{
        display: "inline-block",
        maxHeight: "28px",
        verticalAlign: "middle"
      }}/>Ruth’s Cool Cakes</h3>
          <p>Having always been a lover of baking (and eating!) cakes, I have given up my job as a teacher and decided to share my passion for all things spongey and creamy by setting up a new bespoke cake baking business in Altofts, Wakefield. I make and decorate cakes for any occasion from weddings to baby showers to corporate events. If you are looking for ideas you can browse through the gallery or you can show me your own ideas so that we can come up with something specifically to suit your special occasion.
          </p>
          <div style={{
              textAlign: "center"
            }}>
            <img src={require('../../imgs/slider/hat.jpg')}/>
          </div>
        </section>
        <aside>
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D532220807165067%26id%3D529771860743295&width=500" width="500" height="577" style={{
              border: "none",
              overflow: "hidden",
              width: "100%",
              marginTop: "5px"
            }} scrolling="no" frameBorder="0" allowTransparency="true"></iframe>
        </aside>
      </article>
      {
        // TODO:(Photographs)
        // TODO: FACEBOOK LINK – (once Facebook Business Page is set up- hopefully within the next week)
      }
      < /section>)
  }
}

export default Home