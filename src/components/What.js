import React from 'react';
import '../sass/App.scss';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Why = () => {
    return (
        <div className="whatFull">
            < Navigation/>
            <section className="what">
                <h2>wxhat</h2>
                <div className="wrapper">
                    <p><span>vividfix</span> is a creative design studio offering a suite of graphic and communication design services using the latest technology and a team of gifted customer-centric professionals.</p>
                </div>
            </section>
            <Footer />       
        </div>
    )
}

export default Why;