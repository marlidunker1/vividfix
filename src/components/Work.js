import React from 'react';
import '../sass/App.scss';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Work = () => {
    return (
        <div className="workFull">
            < Navigation/>
            <section className="work">
                <h2>work</h2>
                <div className="wrapper">
                    <p>Work page</p>
                </div>
            </section>
            <Footer />       
        </div>
    )
}

export default Work;