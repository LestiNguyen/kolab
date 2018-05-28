import React, { Component } from 'react';
import Info from './info/info';
import Copy from './copy_right/copy_rigth';
class content extends Component {
    render() {
        return (
            <footer className="footer">
                <Info/>
                <Copy/>
            </footer>
        );
    }
}

export default content;