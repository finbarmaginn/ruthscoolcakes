import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import TimePicker from 'rc-time-picker'
import 'rc-time-picker/assets/index.css';
import {
  formDataClear,
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
    message: store.contactData.message
  }
})

class Contact extends React.Component {
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
    debugger;
    this.props.dispatch(submitContact(data)).then((returned) => {
      // setTimeout(() => {
      // this.props.dispatch(formStatusClear())
      // this.props.dispatch(formDataClear())
      // }, 3000)
      // debugger;
    }).catch((err) => {
      // debugger;
      // setTimeout(() => {
      //   this.props.dispatch(formStatusClear())
      // }, 3000)
    });

    return false;
  }
  render() {
    let now = moment().hour(15).minute(0);

    return (<section className="wrapper" id="contact">
      <article>
        <h1>Contact</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>

          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Name" required="true" onChange={this.handleNameChange.bind(this)}/>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" required="true" onChange={this.handleEmailChange.bind(this)}/>

          <label htmlFor="phone">Telephone</label>
          <input type="tel" id="phone" placeholder="Telephone" required="true" onChange={this.handleTelChange.bind(this)}/>

          <div className="splitLeft">
            <label htmlFor="rc-time-picker-input">Best time to contact</label>
            <TimePicker open={true} format={"hh:mm a"} showSecond={false} use12Hours={true} minuteStep={15} placeholder="Contact Time" onChange={this.handleTimeChange.bind(this)}/>
          </div>

          <div className="splitRight">
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" defaultValue={"-- Occasion --"} required="true" onChange={this.handleOccChange.bind(this)}>
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
            <textarea id="message" placeholder="Message" onChange={this.handleMessageChange.bind(this)}></textarea>
            <input type="submit" value="Send"></input>
          </div>

        </form>
      </article>
    </section>)
  }
}

export default Contact
