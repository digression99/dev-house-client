import React, {Component} from 'react';
import './App.css';
import ResultBox from './components/ResultBox';
import Header from './components/Header';
import ReviewForm from "./components/ReviewForm";
import Reviews from './components/Reviews';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [{
                user: "bb",
                taskName: "running",
                comment: "fuck",
                timestamp: 1010
            },
                {
                    user: "aa",
                    taskName: "running",
                    comment: "fuck",
                    timestamp: 1020
                },
                {
                    user: "ss",
                    taskName: "running",
                    comment: "fuck",
                    timestamp: 1030
                }]
        }
    }


    render() {
        return (
            <div className="container">
                <div className="section">
                    <Header/>
                </div>
                <div className="section">
                    <div className="row">
                        <div className="col s6">
                            <ResultBox username={"kim"} tasks={this.state.tasks}/>
                        </div>
                        <div className="col s6">
                            <ResultBox username={"shim"} tasks={this.state.tasks}/>
                        </div>
                    </div>
                    <ReviewForm/>
                    <Reviews tasks={this.state.tasks}/>
                </div>
            </div>
        );
    }
}

export default App;
