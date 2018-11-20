import './Counter.css';

import React, { Component, Fragment } from 'react';



import PropTypes from 'prop-types';

//statefull
export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
        };
    }
    handleMinusClick = (e) => {
        //this.state.counter = this.state.counter - 1;
        //this.forceUpdate();

        //const { counter } = this.state;
        //this.setState({ counter: counter - 1});

        this.setState((prevState) => ({
            ...prevState,
            counter: prevState.counter - 1,
        }));
    }
    handlePlusClick = (e) => {
        this.setState((prevState) => ({
            ...prevState,
            counter: prevState.counter + 1,
        }));
    }

    render() {
        const { counter } = this.state;

        return (
            <Fragment>
                <button onClick={this.handleMinusClick}>-</button>
                {counter}
                <button onClick={this.handlePlusClick}>+</button>
            </Fragment>
        )
    }
}