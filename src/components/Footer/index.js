import React from 'react'

require('./style.scss')

class Footer extends React.Component {
  render() {
    return (<footer className="wrapper">
      <p>Copyright {(new Date().getFullYear())}</p>
    </footer>)
  }
}

export default Footer;
