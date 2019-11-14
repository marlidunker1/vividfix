import React, { Component } from 'react';
import vxLogo from '../assets/vxWhite.png';
import '../sass/App.scss';

class Footer extends Component {

    render() {
        return (
            <div className="wrapper">
                <section className="footer">
                    <div className="logoContainer">
                        <img src={vxLogo} alt="vx logo"/>
                    </div>
                    <div className="contact">
                        <p>2733 Lakeshorei Boulevard West</p>
                        <p>Toronto, Canada</p>
                        <p>(416) 503-0744</p>
                    </div>
                    <div className="social">
                        <ul>
                            <li>Facebook</li>
                            <li>LinkedIn</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default Footer;