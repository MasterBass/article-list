import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ArticlePage from './components/article/ArticlePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">        
          <Router path="/" component={App}>
            <div>
                <Route exact path="/" component={HomePage}/>
                <Route path="/home" component={HomePage}/>
                <Route path="/about" component={AboutPage} />
                <Route path="/article/:id" component={ArticlePage}/>
            </div>
          </Router>                
      </div>
    );
  }
}

export default App;
