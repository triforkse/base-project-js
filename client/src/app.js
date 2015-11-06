import React from 'react';
import ReactDOM from 'react-dom';
import ActivityIndicator from './activity-indicator.js';
import * as api from './api-client.js';

require('./app.scss');

export default class MyComponent extends React.Component {

  constructor() {
    super();
    this.state = {status: null};

    setTimeout(() => {
      api.fetchStatus(status => this.setState({status}));
    }, 1000);
  }

  render() {
    const {status} = this.state;
    return (
      <div className="page">
        <div className="box">
          <h1>Welcome to your new project!</h1>
          <div className="box__center">{status ? ('API Status: ' + status) : <ActivityIndicator />}</div>
        </div>
      </div>);
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('app'));
