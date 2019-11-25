import React, { Component } from 'react';

import '../styling/Panels.css';

class Panels extends Component {
  state = {
    panels: [
      {
        title: 'MONSOON III',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://i.vimeocdn.com/video/595198868_505x160.jpg',
      },
      {
        title: 'BEAMS',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://i.vimeocdn.com/video/589972810_530x315.jpg',
      },
      {
        title: 'MOVE 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://i.vimeocdn.com/video/590587169_530x315.jpg',
      },
    ],
  }

  render() {
    return (
        <div className="App-panel">
          <div className="App-section1">
            <div className="Panel-1">
              <div className="right-sides texts">
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
              <div className="left-sides texts">
                <h1>{ this.state.panels[1].title }</h1>
                <p>{ this.state.panels[1].text }</p>
              </div>
              <div className="right-sides image">
                <img src={ this.state.panels[1].image }></img>
              </div>
            </div>
            <div className="Panel-3">
              <div className="right-sides texts">
                <h1>{ this.state.panels[2].title }</h1>
                <p>{ this.state.panels[2].text }</p>
              </div>
              <div className="left-sides image">
                <img src={ this.state.panels[2].image }></img>
              </div>
            </div>
          </div>
      </div>
    );
  }
}


export default Panels;