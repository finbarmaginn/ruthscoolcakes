import React from 'react';

require('./style.scss');

class NotFound extends React.Component {
  render() {
    return (<section className="wrapper" id="notFound">
      <h1>Error 404</h1>
      <h2>Page Not Found</h2>
    </section>)
  }
}

export default NotFound
