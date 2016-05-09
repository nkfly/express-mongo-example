
import React from 'react';
import { Button } from 'react-bootstrap';
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  handleClick(message) {
  	var self = this;
  	return function() {
  		self.props.onClickSidebarButton(message);
  	}
  }
  
  render() {
    return <div>
    	<Button bsStyle="primary" onClick={this.handleClick('Sidebar Up')}>Sidebar Up</Button>
    	<FlatButton label="Sidebar Down" primary={true} onClick={this.handleClick('Sidebar Down')}></FlatButton>
      </div>
  }
}

module.exports = Sidebar;

Sidebar.childContextTypes = {
   muiTheme: React.PropTypes.object.isRequired,
};


