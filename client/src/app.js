import React from 'react';
import ReactDOM from 'react-dom';
import ActivityIndicator from './activity-indicator.js';
import * as api from './api-client.js';

require('./app.scss');

export default class MyComponent extends React.Component {

  constructor() {
    super();
    this.state = { apiStatus: null, socketStatus: null };

    setTimeout(() => {
      api.fetchStatus(apiStatus => this.setState({ apiStatus }));
      api.connectWebSocket(socketStatus => this.setState({ socketStatus }));
    }, 1000);
  }

  render() {
    const { apiStatus, socketStatus } = this.state;
    return (
      <div className="page">
        <div className="box">
          <h1>Welcome to your new project!</h1>
          <div className="box__center">{apiStatus ? (`API Status: ${apiStatus}`) : <ActivityIndicator />}</div>
          <div className="box__center">{socketStatus ? (`Web socket Status: ${socketStatus}`) : <ActivityIndicator />}</div>
        </div>
      </div>);
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('app'));
