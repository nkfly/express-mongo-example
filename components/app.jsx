
import React from 'react';
import Content from './content/content.jsx';
import Sidebar from './sidebar/sidebar.jsx';

class App extends React.Component {
  onClickSidebarButton(button) {
    this.refs.content.onClickSidebarButton(button);

  }
  render() {
    return <div>
        <Sidebar onClickSidebarButton={this.onClickSidebarButton.bind(this)} />
        <Content ref='content' />
      </div>
  }
}

module.exports = App;


