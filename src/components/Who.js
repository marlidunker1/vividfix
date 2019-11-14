import React from 'react';
import '../sass/App.scss';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Who = () => {
    return (
        <div className="whoFull">
            < Navigation/>
            <section className="who">
                <h2>vxho</h2>
                <div className="wrapper">
                    <p>Who page</p>
                </div>
            </section>
            <Footer />       
        </div>
    )
}

export default Who;