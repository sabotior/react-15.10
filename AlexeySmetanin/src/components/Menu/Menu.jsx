import './Menu.css';

import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        const {title, items} = this.props;
        return (
            <div>
                <h3>{title}</h3>
            <ul className="menu">
                {items.map((item) => <li><a href={item.href}>{item.title}</a></li>)}
            </ul>
            </div>
        )
    }
}