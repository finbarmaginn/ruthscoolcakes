import React from 'react'
import 'imports-loader?jQuery=jquery!owl.carousel';
import sliderImages from '../../imgs/slider'
import 'owl.carousel/dist/assets/owl.carousel.css';
import $ from 'jquery';
import Loader from '../Loader'
require('./style.scss');

class Slider extends React.Component {
  render() {
    let imagesLoaded = 0

    return (<div id="slider">
      <Loader/> {/*

      <div className="loader" style={{
          position: 'relative',
          top: '50px'
        }}>Loading...</div>
      */
      }
      <div className="wrapper">
        <div className="owl-carousel owl-theme">
          {
            sliderImages.map((image, i) => {
              return (<div key={i}>
                <div className="image">
                  <figure>
                    <img src={image} alt={image} onLoad={() => {
                        imagesLoaded++;
                        if (imagesLoaded === sliderImages.length) {
                          jQuery('.spinner')[0].style.display = "none";
                          jQuery('.owl-carousel').owlCarousel({
                            autoplay: true,
                            autoplayTimeout: 3000,
                            items: 9,
                            pagination: false,
                            loop: true,
                            center: true,
                            autoWidth: true,
                            smartSpeed: 1000,
                            responsiveRefreshRate: 100
                          })
                        }
                      }}/>
                  </figure>
                </div>
              </div>)
            })
          }
        </div>
      </div>
    </div>)
  }
}

export default Slider
