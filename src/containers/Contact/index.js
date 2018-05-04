import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import TimePicker from 'rc-time-picker'
import Loader from '../../components/Loader'
import Success from '../../components/Success'
import StatusError from '../../components/StatusError'
import 'rc-time-picker/assets/index.css';
import {
  formDataClear,
  formStatusClear,
  nameChange,
  emailChange,
  telChange,
  timeChange,
  occChange,
  messageChange,
  submitContact
} from '../../actions'
require("./style.scss")

@connect((store) => {
  return {
    name: store.contactData.name,
    email: store.contactData.email,
    tel: store.contactData.tel,
    contactTime: store.contactData.contactTime,
    occasion: store.contactData.occasion,
    message: store.contactData.message,
    error: store.contactStatus.error,
    pending: store.contactStatus.pending,
    sent: store.contactStatus.sent
  }
})

class Contact extends React.Component {
  componentDidMount() {
    document.title = "Ruth's Cool Cakes | Contact"
  }
  handleNameChange(e) {
    console.log(e.target.value)
    this.props.dispatch(nameChange(e.target.value))
  }
  handleEmailChange(e) {
    console.log(e.target.value)
    this.props.dispatch(emailChange(e.target.value))
  }
  handleTelChange(e) {
    console.log(e.target.value)
    this.props.dispatch(telChange(e.target.value))
  }
  handleTimeChange(e) {
    e !== null
      ? this.props.dispatch(timeChange(e.format('hh:mm a')))
      : ""
  }
  handleOccChange(e) {
    console.log(e.target.value)
    this.props.dispatch(occChange(e.target.value))
  }
  handleMessageChange(e) {
    console.log(e.target.value)
    this.props.dispatch(messageChange(e.target.value))
  }
  handleSubmit(e) {
    e.preventDefault()
    let {
        name,
        email,
        tel,
        contactTime,
        occasion,
        message
      } = this.props,
      data = {
        name: name,
        email: email,
        tel: tel,
        contactTime: contactTime,
        occasion: occasion,
        message: message
      }
    this.props.dispatch(submitContact(data)).then((returned) => {
      setTimeout(() => {
        this.props.dispatch(formStatusClear())
        this.props.dispatch(formDataClear())
      }, 3500)
    }).catch((err) => {
      // debugger;
      setTimeout(() => {
        this.props.dispatch(formStatusClear())
      }, 3500)
    });

    return false;
  }
  statusWrap(status) {
    return (<div style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "rgba(255, 255, 255, 0.5)",
        zIndex: "9999"
      }}>{status}</div>)
  }
  renderLoader() {
    return this.statusWrap(<Loader style={{
        position: "absolute",
        left: "calc(50% - 20px)",
        top: "calc(50% - 20px)",
        margin: "0",
        zIndex: "9999"
      }}/>)
  }
  renderSuccess() {
    return this.statusWrap((<div><Success/>
      <div style={{
          display: "block",
          zIndex: "9999",
          textAlign: "center",
          margin: "0 auto",
          background: "white",
          padding: "10px 0",
          boxShadow: "0 0 7px rgba(0, 0, 0, 0.3)",
          position: "absolute",
          bottom: "0",
          width: "100%"
        }}>
        <h3 style={{
            color: "green",
            maxWidth: "320px",
            margin: "0 auto"
          }}>Thanks for getting in touch!<br/>Someone will be in contact with you shortly.</h3>

      </div>
    </div>))
  }
  renderError() {
    return this.statusWrap((<div><StatusError/>
      <div style={{
          display: "block",
          zIndex: "9999",
          textAlign: "center",
          margin: "0 auto",
          background: "white",
          padding: "10px 0",
          boxShadow: "0 0 7px rgba(0, 0, 0, 0.3)",
          position: "absolute",
          bottom: "0",
          width: "100%"
        }}>
        <h3 style={{
            maxWidth: "320px",
            margin: "0 auto"
          }}>Please make sure the form has been correctly filled in or else try again later!</h3>
      </div>
    </div>))
  }
  render() {
    let now = moment().hour(15).minute(0);
    let {
      pending,
      sent,
      error,
      name,
      email,
      tel,
      contactTime,
      occasion,
      message
    } = this.props
    return (<section className="wrapper" id="contact">
      <article>
        <h1>Contact</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          {
            pending
              ? this.renderLoader()
              : ""
          }
          {
            sent
              ? this.renderSuccess()
              : ""
          }
          {
            error
              ? this.renderError()
              : ""
          }
          <label htmlFor="name">Name</label>
          <input value={name} type="text" id="name" placeholder="Name" required="true" onChange={this.handleNameChange.bind(this)}/>

          <label htmlFor="email">Email</label>
          <input value={email} type="email" id="email" placeholder="Email" required="true" onChange={this.handleEmailChange.bind(this)}/>

          <label htmlFor="phone">Telephone</label>
          <input value={tel} type="tel" id="phone" placeholder="Telephone" required="true" onChange={this.handleTelChange.bind(this)}/>

          <div className="splitLeft">
            <label htmlFor="rc-time-picker-input">Best time to contact</label>
            <TimePicker open={true} format={"hh:mm a"} showSecond={false} use12Hours={true} minuteStep={15} placeholder="Contact Time" value={moment(this.props.contactTime || "05:30 pm", "hh:mm a")} onChange={this.handleTimeChange.bind(this)}/>
          </div>

          <div className="splitRight">
            <label htmlFor="occasion">Occasion</label>
            <select value={occasion} id="occasion" required="true" onChange={this.handleOccChange.bind(this)}>
              <option disabled="true">-- Occasion --</option>
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Christening</option>
              <option>Baby Shower</option>
              <option>Christmas</option>
              <option>Halloween</option>
              <option>Valentines</option>
              <option>Mother’s Day</option>
              <option>Corporate Events</option>
              <option>Other</option>
            </select>
            <label htmlFor="message"/>
            <textarea value={message} id="message" placeholder="Message" onChange={this.handleMessageChange.bind(this)}></textarea>
            <input type="submit" value="Send"></input>
          </div>

        </form>
      </article>
    </section>)
  }
}

export default Contact
