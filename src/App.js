import React, {Component} from 'react';
import { connect } from 'react-redux';

import './App.css';
import ResultBox from './components/ResultBox';
import Header from './components/Header';
import ReviewForm from "./components/ReviewForm";
import Reviews from './components/Reviews';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {

        console.log('app props : ', this.props.tasks);

        return (
            <div className="container">
                <div className="section">
                    <Header/>
                </div>
                <div className="section">
                    <div className="row">
                        <div className="col s6">
                            <ResultBox username={"kim"} tasks={this.props.tasks}/>
                        </div>
                        <div className="col s6">
                            <ResultBox username={"shim"} tasks={this.props.tasks}/>
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

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
