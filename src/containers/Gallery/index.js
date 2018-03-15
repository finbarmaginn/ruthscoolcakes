import React from 'react'
import {connect} from 'react-redux'
import Masonry from 'react-masonry-component'
import MasonryItem from '../../components/MasonryItem'
import Viewer from '../../components/Viewer'
import galleryImages from '../../imgs/gallery'

require('./style.scss')

@connect((store) => {
  return {isActive: store.gallery.isActive, src: store.gallery.src}
})

class Gallery extends React.Component {
  render() {
    let {dispatch, src, isActive} = this.props

    let masonryOptions = {
      itemSelector: '.image-element-class',
      columnWidth: '.image-element-class',
      percentPosition: true,
      transitionDuration: 0,
      gutter: 5
    }
    //
    // let images = [
    //   require('../../imgs/slider/hat.jpg'),
    //   require('../../imgs/slider/shirt.jpg'),
    //   require('../../imgs/slider/tots.jpg'),
    //   require('../../imgs/slider/chocolates.jpg'),
    //   require('../../imgs/slider/frozen.jpg'),
    //   require('../../imgs/slider/spid.jpg'),
    //   require('../../imgs/slider/wedding.jpg'),
    //   require('../../imgs/slider/dragon.jpg'),
    //   require('../../imgs/slider/waldo.jpg')
    // ]
    // onImagesLoaded={this.display.bind(this)}
    return (<section className="wrapper" style={{
        // maxWidth: "600px"
      }}>
      <article>
        <h1>Gallery</h1>
        {
          (
            isActive
            ? <Viewer src={src} isActive={isActive} dispatch={dispatch}/>
            : <div></div>)
        }
        <Masonry className={'my-gallery-class'} elementType={'ul'} options={masonryOptions} updateOnEachImageLoad={true}>
          <div className='mason-column-width'/> {
            galleryImages.map((image, ind) => {
              //key={ind}  src={src} i
              return <MasonryItem image={image} key={ind} dispatch={dispatch} sActive={isActive}/>
            })
          }
        </Masonry>
      </article>
    </section>)
  }
}

export default Gallery
