import './Container.css';

import React, { Component } from 'react';

export default class Container extends Component {
    render() {
       // console.log('props', this.props);
        const {children} = this.props;
        return (
            <div className="container">
           {children}
            </div>
        )
    }
}