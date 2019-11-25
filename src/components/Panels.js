import React, { Component } from 'react';
import App from '../App';
import Carousel from '../../node_modules/react-bootstrap/Carousel';

import '../styling/Panels.css';
import { black } from 'ansi-colors';

import hunt from '../hunt.jpg';
import nichts from '../nichts.jpg';
import viceversa from '../viceversa.png';

class Panels extends Component {
  state = {
    panels: [
      {
        title: 'MONSOON III',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://i.vimeocdn.com/video/595198868_505x160.jpg',
        imagefirst: true 
      },
      {
        title: 'BEAMS',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://i.vimeocdn.com/video/589972810_530x315.jpg',
        imagefirst: true 
      },
      {
        title: 'MOVE 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://i.vimeocdn.com/video/590587169_530x315.jpg',
        imagefirst: true 
      },
    ],
  }

  render() {
    return (
        <div className="App-panel">
          <div className="App-section1">
            <div className="Panel-1">
              <div className="right-sides">
                <h1>{ this.state.panels[0].title }</h1>
                <p>{ this.state.panels[0].text }</p>
              </div>
              <div className="left-sides image">
                <img src={ this.state.panels[0].image }></img>
              </div>
            </div>
          </div>
          <div className="App-section2">
            <div className="Panel-2">
              <div className="left-sides">
                <h1>{ this.state.panels[1].title }</h1>
                <p>{ this.state.panels[1].text }</p>
              </div>
              <div className="right-sides image">
                <img src={ this.state.panels[1].image }></img>
              </div>
            </div>
            <div className="Panel-3">
              <div className="right-sides">
                <h1>{ this.state.panels[2].title }</h1>
                <p>{ this.state.panels[2].text }</p>
              </div>
              <div className="left-sides image">
                <img src={ this.state.panels[2].image }></img>
              </div>
            </div>
          </div>
        
        
        <Carousel keyboard={ false }>
          <Carousel.Item>
            <img
              className=""
              src={ hunt }
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Hunt for the WilderPeople</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=""
              src={ nichts }
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ viceversa }
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Vice Versa</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        </div>
    );
  }
}



export default Panels;