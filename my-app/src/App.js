import React, { Component } from 'react';
import slinky from './slinky.gif';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="body">
        <div className="App-header">
          <img src={slinky} className="slinky" alt="slinky" height="100" />



          <nav className="navigation">
          <a className="nav-toggle" href="#">
            <span className="trigger">Menu</span>
            <div className="nav-menu">
              <ul>
                <li><a href="google.com">Menu item 1</a></li>
                <li><a href="#">Menu item 2</a></li>
                <li><a href="#">Menu item 3</a></li>
                <li><a href="#">Menu item 4</a></li>
                <li><a href="#">Menu item 5</a></li>
              </ul>
            </div>
          </a>

          </nav>

        </div>
        <h2>Stevens Responsive Webpage</h2>

        



        </div>

        <footer className="footer">
          <div className="constrain">
            <a href="#">Contact</a>
            <a href="#">Careers</a>
            <a href="#">About Us</a>
          </div>
        </footer>

      </div>//App
    );
  }
}

export default App;
