import React, { Component } from 'react';
import slinky from './slinky.gif';
import banner from './banner.png';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="App-header">
          <img src={slinky} className="slinky" height="100" />



          <nav className="navigation">
          <a className="nav-toggle" href="#">
            <span className="trigger">Menu</span>
            <div className="nav-menu">
              <ul>
                <li><a href="#">Menu item 1</a></li>
                <li><a href="#">Menu item 2</a></li>
                <li><a href="#">Menu item 3</a></li>
                <li><a href="#">Menu item 4</a></li>
                <li><a href="#">Menu item 5</a></li>
              </ul>
            </div>
          </a>

          </nav>

        </div>
        <div className="body">
          <h2>Stevens Responsive Webpage</h2>
          <img src={banner} className="banner"/>
        
          <section className="main">
            
              <img src={img1} className="pictures"/>
              <img src={img2} className="pictures"/>
              <img src={img3} className="pictures"/>
              
            


          </section>
        



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
