import React from 'react';
import ReactDOM from 'react-dom';

var MyComponent = React.createClass({
  render: function() {
    return <div>Hello World</div>;
  }
});

ReactDOM.render(<MyComponent />, document.getElementById('app'));
