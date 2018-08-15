import React, {Component} from 'react';
import { connect } from 'react-redux';

import './App.css';
import ResultBox from './components/ResultBox';
import Header from './components/Header';
import ReviewForm from "./components/ReviewForm";
import Reviews from './components/Reviews';
import Login from './components/Login';

import * as actions from './actions';

class App extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await this.props.fetchTasks();
    }

    render() {
        return (
            <div className="container">
                <div className="section">
                    <Header/>
                </div>
                <div className="section">
                    <Login />
                </div>
                <div className="section">
                    <div className="row">
                        <div className="col s6">
                            <ResultBox username={"kim"} />
                        </div>
                        <div className="col s6">
                            <ResultBox username={"shim"}/>
                        </div>
                    </div>
                    <ReviewForm/>
                    <Reviews tasks={this.props.tasks}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('in app, state : ', state);
    return {
        tasks : state.tasks
    };
};

export default connect(mapStateToProps, actions)(App);
