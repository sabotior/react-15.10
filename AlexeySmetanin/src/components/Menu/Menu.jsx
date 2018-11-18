import './Menu.css';

import React, { Component, Fragment } from 'react';

export default class Menu extends Component {
    render() {
       // console.log('props', this.props);
        const {title, items} = this.props;
        return (
            <Fragment>
                <h3>{title}</h3>
            <ul className="menu">
                {items.map((item) => <li><a href={item.href}>{item.title}</a></li>)}
            </ul>
            </Fragment>
        )
    }
}