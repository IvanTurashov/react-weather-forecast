import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu.jsx';

class MainPage extends Component {
    render() {
        return (
            <div>
                <Menu />
            </div>
        );
    }
}

export default MainPage;