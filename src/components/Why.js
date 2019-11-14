import React from 'react';
import '../sass/App.scss';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Why = () => {
    return (
        <div className="whyFull">
            < Navigation/>
            <section className="why">
                <div className="wrapper">
                    <p>look good <span>:)</span></p>
                </div>
            </section>
            <Footer />       
        </div>
    )
}

export default Why;