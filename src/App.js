import React, { Component } from 'react';
import Panels from './components/Panels.js';
import MyCarousel from './components/MyCarousel.js';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  state = {
    panels: [
      {
        title: 'Monsoon III',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://i.vimeocdn.com/video/590587169_530x315.jpg',
        imagefirst: true 
      },
      {
        title: 'Beems',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://i.vimeocdn.com/video/589972810_530x315.jpg',
        imagefirst: true 
      },
      {
        title: 'Move 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://i.vimeocdn.com/video/595198868_505x160.jpg',
        imagefirst: true 
      },
    ],
  }

  render () {
    return (
      <div className="App">
        <div className="App-panel">
          <div className="App-section1">
            <Panels></Panels>
          </div>
        </div>
        <div className="App-carousel">
          <MyCarousel></MyCarousel>
        </div>
      </div>
    );
  }
}

export default App;
