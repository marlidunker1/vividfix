import React, { Component } from 'react';
import vxLogo from '../assets/vxWhite.png';
import { Link } from 'react-router-dom';
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
                        <li>
                            <Link to="/">vxhy</Link>
                        </li>
                        <li>+</li>
                        <li><Link to="/vxhat">vxhat</Link></li>
                        <li>+</li>
                        <li><Link to="/vxho">vxho</Link></li>
                        <li>+</li>
                        <li><Link to="/vxhere">vxhere</Link></li>
                        <li>+</li>
                        <li><Link to="/vxork">vxork</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;