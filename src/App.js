import React, { Component } from 'react';
import './App.css';
import ResultBox from './components/ResultBox';
import Header from './components/Header';
import ReviewForm from "./components/ReviewForm";

class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="section">
              <Header />
          </div>
          <div className="divider" />
          <div className="section">
              <div className="row">
                  <div className="col s6">
                      <ResultBox username={"kim"} tasks={[{
                          user : "bb",
                          taskName : "running",
                          comment : "fuck",
                          timestamp : 1010
                      },
                          {
                              user : "aa",
                              taskName : "running",
                              comment : "fuck",
                              timestamp : 1020
                          },
                          {
                              user : "ss",
                              taskName : "running",
                              comment : "fuck",
                              timestamp : 1030
                          },
                      ]}/>
                  </div>
                  <div className="col s6">
                      <ResultBox username={"shim"} tasks={[{
                          user : "dd",
                          taskName : "running",
                          comment : "fuck",
                          timestamp : 1000
                      },
                          {
                              user : "bb",
                              taskName : "running",
                              comment : "fuck",
                              timestamp : 1020
                          },
                          {
                              user : "bb",
                              taskName : "running",
                              comment : "fuck",
                              timestamp : 1030
                          },
                      ]}/>
                  </div>
              </div>
              <ReviewForm />
          </div>
      </div>
    );
  }
}

export default App;
