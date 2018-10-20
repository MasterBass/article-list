import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default (
    <Router path="/" component={App}>
        <Route exact path="/" component={HomePage}/>
        <Route path="home" component={HomePage}/>
        <Route path="about" component={AboutPage} />
    </Router>
);