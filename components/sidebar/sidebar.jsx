
import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }

  handleUpClick() {
    this.setState({counter: this.state.counter + 1});
  }
  handleDownClick() {
    this.setState({counter: this.state.counter - 1});
  }
  render() {
    return <div>
    	<button onClick={this.handleUpClick.bind(this) }>Up</button>
    	<button onClick={this.handleDownClick.bind(this)}>Down</button>
    	{this.state.counter}
      </div>
  }
}

module.exports = Sidebar;


