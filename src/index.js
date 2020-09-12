import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from "./App"
import About from "./pages/about"
import Homepage from './component/Homepage/Homepage';

ReactDOM.render(
    <Router>
        <div>
            <main>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route exact path="/homepage" component={Homepage} />
            </main>
        </div>
    </Router>, 
    document.getElementById("root")
    
)
