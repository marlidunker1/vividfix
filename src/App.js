import React, { Component } from 'react';
import './sass/App.scss';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        < Navigation/>
        < Landing/>
        < Footer/>
      </div>
    );
  }
}

export default App;
