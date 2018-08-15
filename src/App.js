import React, { Component } from 'react';
import './App.css';

import ResultBox from './components/ResultBox';

class App extends Component {
  render() {
    return (
      <div>
          <h1>Dev House</h1>
          <ResultBox username={"kim"} tasks={[{
              user : "kim",
              taskName : "running",
              comment : "fuck",
              timestamp : 1000
          }
              ]}/>
          <ResultBox username={"shim"} tasks={[{
              user : "kim",
              taskName : "running",
              comment : "fuck",
              timestamp : 1000
          }
          ]}/>
      </div>
    );
  }
}

export default App;
