import React from 'react';
import ReactDOM from 'react-dom';
import socketClient from './socketClient';

require('./app.scss');

var MyComponent = React.createClass({
  render: function() {
    return <div>Hello World!</div>;
  }
});

ReactDOM.render(<MyComponent />, document.getElementById('app'));
