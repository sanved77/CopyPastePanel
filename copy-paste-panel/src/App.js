import React, { Component } from 'react';
import './main.css';
import Panel from './comp/Panel';
import data from './dat/data';

class App extends Component {

  state = { 
    text_board : 'Hover on a box to see text'
  }

  textChanger = (text) => {
    this.setState({
      text_board: text
    })
    console.log('text changed to - ' + text)
  }

  render(){
    return (
      <div className="App">
        <div className="button_pad">
          <h1>Copy Paste Board</h1>
          <Panel textChange={this.textChanger} data={data.linkPanel}></Panel>
          <Panel textChange={this.textChanger} data={data.jobsPanel}></Panel>
          <Panel textChange={this.textChanger} data={data.msgPanel}></Panel>
        </div>
        <div className="text_pad">
          <h1>Text Board</h1>
          <p class="text_box">
            {this.state.text_board}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
