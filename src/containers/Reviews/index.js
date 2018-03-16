import React from 'react'
import {iframeResizer} from 'iframe-resizer'
import {getReviews} from '../../actions'
import {connect} from 'react-redux'

import Loader from '../../components/Loader'

require("./style.scss")

@connect((store) => {
  return {
    reviews: store.reviews.response,
    pending: store.reviews.pending,
    sent: store.reviews.sent,
    error: store.reviews.error,
    returned: store.reviews.returned
  }
})

class Reviews extends React.Component {
  componentDidMount() {
    this.props.dispatch(getReviews()).then((res) => {
      // console.log(res.value.data)
      return this.renderReviews(this.props.reviews)

    }).catch((err) => {
      // console.log(err)
      return this.renderReviews(this.props.reviews)

    })
  }

  renderCustom(review, i) {
    let starsArr = [0, 0, 0, 0, 0];

    for (let i = 0; i < review.stars; i++) {
      starsArr[i] = 1;
    }

    return (<li key={review.id.toString()} style={{
      position: "relative"
    }}>
      <ul className="stars" style={{
        top: "12px"
      }}>
        {
          starsArr.map(function (star, i) {
            let opacity = star === 1
              ? "1"
              : "0.4"
            return <li key={i} style={{
              opacity: opacity
            }}></li>
          })
        }</ul>
      <Loader style={{
        top: "calc(50% - 20px)",
        margin: "0",
        zIndex: "-1"
      }}/>
      <article className="customReview">
        <h3 style={{
          margin: "0 0 10px 0"
        }}>{review.name}</h3>
        <div style={{
          display: "block",
          width: "100%",
          borderBottom: "solid 1px #dfe0e4"
        }}/>
        <p style={{
          margin: "10px 0 0 0"
        }}>{review.comment}</p>
      </article>
    </li>)
  }

  renderEmbed(review, i) {
    let windowWidth = window.innerWidth,
      iframeWidth = windowWidth > 600
        ? "600"
        : windowWidth,
      height = (
        window.innerWidth > 500
          ? review.height
          : (Number(review.height) + 20)),
      starsArr = [];

    for (var i = 0; i < review.stars; i++) {
      starsArr.push(i)
    }
    // debugger;
    return (<li key={review.id.toString()} style={{
      height: height + "px",
      position: "relative",
      margin: "20px auto"
    }}>
      <ul className="stars">
        {
          starsArr.map(function (star, i) {
            return <li key={i}></li>
          })
        }</ul>
      <Loader style={{
        margin: "0",
        top: "calc(50% - 20px)"
      }}/>

      <iframe src={"https://www.facebook.com/plugins/post.php?href=" + review.url + "&width=" + iframeWidth}
              width={iframeWidth} height={height} style={{
        border: "none",
        overflow: "hidden",
        position: "absolute",
        top: "0"
      }} scrolling="no" frameBorder="0" allowTransparency="true">
        <p>Loading...</p>
      </iframe>
    </li>)
  }

  renderReviews(reviews) {
    let {pending} = this.props
    if (!pending && typeof reviews === "object") {
      return reviews.reverse().map((review, i) => {
        if (review.type === "FACEBOOK_EMBED") {
          return this.renderEmbed(review, i)
        } else if (review.type === "CUSTOM_INPUT") {
          return this.renderCustom(review, i)
        }
      })
    } else if (!pending && typeof reviews !== "object") {
      return (<h2 style={{textAlign: "center", color: "silver"}}>Oops...</h2>)
    } else {
      return <Loader/>
    }
  }

  render() {
    let {returned} = this.props,
      data = typeof returned.data !== "undefined"
        ? returned.data
        : [],
      status = typeof returned.status !== "undefined"
        ? returned.status
        : 0;

    return (<section className="wrapper" style={{
      maxWidth: "600px",
      margin: "0 auto"
    }}>
      <h1>Reviews</h1>
      {/* <Loader/> */}
      <ul className="reviews">
        {
          (
            status === 200 && data.length
              ? this.renderReviews(data)
              : (
              status === 500 || status === 404
                ? (<pre style={{
                maxWidth: "800px",
                display: "block",
                margin: "0 auto",
                padding: "20px",
                textAlign: "center",
                border: "solid 1px silver"
              }}>{returned.status} {returned.statusText}</pre>)
                : (<Loader/>)))
        }
      </ul>
    </section>)
  }
}

export default Reviews
