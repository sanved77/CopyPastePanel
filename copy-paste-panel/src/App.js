import React, { Component } from 'react';
import './main.css';
import Panel from './comp/Panel';
import data from './dat/data';

class App extends Component {

  render(){
    return (
      <div className="App">
        <h1>Copy Paste Board</h1>
        <main>
          <Panel data={data.linkPanel}></Panel>
          <Panel data={data.jobsPanel}></Panel>
        </main>
      </div>
    );
  }
}

export default App;
