import React, { Component } from 'react';
import Navigation from './components/Navigation'
import Index from './components/pages/Index/Index'
import MapGenerator from './components/pages/MapGenerator/MapGenerator'
import PrintCard from './components/pages/PrintCard/PrintCard'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
        <section className="main">
          <Navigation />
          <Router>
            <Route path="/" exact component={Index} />
            <Route path="/print/" component={PrintCard} />
            <Route path="/map-gen/" component={MapGenerator} />
          </Router>
        </section>
    );
  }
}

export default App;
