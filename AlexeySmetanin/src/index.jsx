import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Menu from './components/Menu';

const items = [
    { href: '/', title: 'Home' },
    { href: '/news', title: 'News' },
    { href: '/blog', title: 'Blog' },
]

class App extends Component {
    render() {
        return (
            <div className="box">
            <Menu items={items} title="Main menu" />
            Hello word!
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'));