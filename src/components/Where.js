import React from 'react';
import '../sass/App.scss';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Where = () => {
    return (
        <div className="whereFull">
            < Navigation/>
            <section className="where">
                <h2>vxhere</h2>
                <div className="wrapper">
                    <p>Where page</p>
                </div>
            </section>
            <Footer />       
        </div>
    )
}

export default Where;