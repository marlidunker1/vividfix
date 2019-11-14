import React, { Component } from 'react';
import './sass/App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Why from './components/Why';
import What from './components/What';
import Who from './components/Who';
import Where from './components/Where';
import Work from './components/Work';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path="/" component={Why} />
            <Route exact path="/vxhat" component={What} />
            <Route exact path="/vxho" component={Who} />
            <Route exact path="/vxhere" component={Where} />
            <Route exact path="/vxork" component={Work} />
        </div>
      </Router>
    );
  }
}

export default App;
