import React from 'react'
import {connect} from 'react-redux'
import Loader from '../../components/Loader'
import Slider from '../../components/Slider'
import FacebookProvider, {Page} from 'react-facebook'
require('./style.scss')

@connect((store) => {
  return {windowWidth: store.general.windowWidth}
})

class Home extends React.Component {
  componentDidMount() {
    document.title = "Ruth's Cool Cakes | Home"
  }
  render() {
    let {windowWidth, dispatch} = this.props
    return (<div>
      <Slider/>

      <section className="wrapper" style={{
          position: "relative"
        }}>
        <article id="home">
          <section>
            <p style={{
                marginTop: "5px",
                marginBottom: "10px"
              }}>
              <span style={{
                  fontFamily: '"Headings", Fallback, sans-serif',
                  color: '#ec4b85',
                  fontSize: ""
                }}>
                Welcome{" "}
              </span>
              to the wonderful and whacky world of...
            </p>
            <h3 className="miniLogo"><img src={require('../../imgs/logo.png')} style={{
        display: "inline-block",
        maxHeight: "28px",
        verticalAlign: "middle",
        marginRight: "5px"
      }}/>Ruth's Cool Cakes</h3>
            <img src={require('../../imgs/gallery/IMG_0984_small.jpg')} style={{
                float: "right",
                marginLeft: "5px",
                marginBottom: "10px",
                maxWidth: "50%",
                maxHeight: "406px"
              }}/>
            <p style={{
                margin: "10px 0"
              }}>Having always been a lover of baking (and eating!) cakes, I have given up my job as a teacher and decided to share my passion for all things spongey and creamy by setting up a new bespoke cake baking business in Altofts, Wakefield. I make and decorate cakes for any occasion from weddings to baby showers to corporate events. If you are looking for ideas you can browse through the gallery or you can show me your own ideas so that we can come up with something specifically to suit your special occasion.
            </p>
          </section>
          <aside>
            <Loader style={{
                margin: "0",
                position: "absolute",
                top: "calc(20% - 20px)"
              }}></Loader>
            <FacebookProvider appId="125243528312148">
              <Page href="https://www.facebook.com/Ruths-Cool-Cakes-529771860743295/" tabs="timeline"/>
            </FacebookProvider>

          </aside>
        </article>
        {/* TODO:(Photographs) */}
      </section>
    </div>)
  }
}

export default Home
