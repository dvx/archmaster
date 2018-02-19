import React, { Component } from 'react';
import Navigation from './components/Navigation'
import PrintCard from './components/PrintCard'
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="main">
        <Navigation />
        <PrintCard />
      </section>
    );
  }
}

export default App;
