
import React from 'react';
import update from 'react-addons-update'

class Content extends React.Component {
  handleUpClick() {
    this.setState({counter: this.state.counter + 1});
  }
  handleDownClick() {
    this.setState({counter: this.state.counter - 1});
  }

  constructor(props) {
    super(props);
    this.state = {counter: 0, numberArray : []};
  }

  componentDidMount() {
    console.log('mount');
    this.updateNumberArray();
  }

  updateNumberArray() {
    $.get('test_array', function(result) {
      console.log(result);
      this.setState({
            numberArray: update(this.state.numberArray, { '$set': result.data }) ,
          });
      }.bind(this), "json");
  }

  componentDidUpdate() {
    console.log('update');

  }
  render() {
    return <div>
    	<button onClick={this.handleUpClick.bind(this) }>Up</button>
    	<button onClick={this.handleDownClick.bind(this)}>Down</button>
    	{this.state.counter}
      <ul>  
      {this.state.numberArray.map(function(number, i) {
                              return (<li key={i}>
                                        {number}
                                    </li>)
                          })}
      </ul>
      </div>
  }
}

module.exports = Content;


