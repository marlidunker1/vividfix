import React, { Component } from 'react';
import vxLogo from '../assets/vx.png';
import '../sass/App.scss';

class Navigation extends Component {

    constructor() {
        super();
        this.state = {
            clicked: false,
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState(state => ({
            clicked: !state.clicked
        }));
    }

    render() {
        const { clicked } = this.state;

        return (
            <div className="wrapper">
                <nav>
                    <button className="navButton" onClick={this.handleClick}>
                        <img src={vxLogo} alt="vx logo"/>
                    </button>        
                    <ul className={`navList ${ clicked ? "visible" : ""}`}>
                        <li><a href="#">vxhy</a></li>
                        <li>+</li>
                        <li><a href="#">vxhat</a></li>
                        <li>+</li>
                        <li><a href="#">vxho</a></li>
                        <li>+</li>
                        <li><a href="#">vxhere</a></li>
                        <li>+</li>
                        <li><a href="#">vxork</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;