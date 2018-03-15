import React from 'react'
import Loader from '../Loader'
import {toggleViewer} from '../../actions'

class MasonryItem extends React.Component {
  toggleViewer() {
    let {image, dispatch, isActive} = this.props;

    dispatch(toggleViewer(image.src.large, isActive))
  }
  render() {
    let {isActive, image} = this.props

    return (<li className="image-element-class">
      <button onClick={this.toggleViewer.bind(this)}>
        <Loader style={{
            position: "absolute",
            top: "calc(50% - 20px)",
            left: "calc(50% - 20px)",
            zIndex: "-9999",
            margin: "0"
          }}/> {/*  */}
        <img src={image.src.small}/>
      </button>
    </li>)
  }
}

export default MasonryItem
