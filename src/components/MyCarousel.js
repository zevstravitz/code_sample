import React, { Component } from 'react';
import App from '../App';
import Carousel from 'react-bootstrap/Carousel';

import '../styling/Panels.css';

import hunt from '../images/hunt.jpg';
import nichts from '../images/nichts.jpg';
import viceversa from '../images/viceversa.png';
import fourthphase from '../images/fourthphase.jpg';
import fullmoon from '../images/fullmoon.jpg';


class MyCarousel extends Component {
  state = {
    panels: [
      {
        title: 'The Fourth Phase',
        text: 'From the creators of The Art of Flight, Red Bull Media House presents THE FOURTH PHASE, a nowboarding epic starring iconic athlete Travis Rice.',
        image: { fourthphase },
        color: "blue"
      },
      {
        title: 'Hunt for the WildPeople',
        text: 'Raised on hip-hop and foster care, defiant city kid Ricky gets a fresh start in the New Zealand countryside. From the director of What We Do In The Shadows.',
        image: { hunt },
        color: "blue"
      },
      {
        title: 'Nichts passiert / A Decent Man',
        text: 'A Swiss family takes a ski vacation and runs into trouble when the father, the titular decent man, finds himself in a series of moral quandries.',
        image: { nichts },
        color: "navy"
      },
      {
        title: 'Vice Versa',
        text: '',
        image: { viceversa },
        color: "gold"
      },
      {
        title: 'Fullmoon',
        text: '',
        image: { fullmoon },
        color: "gold"
      },
    ],
  }

  render() {
    return (
      <div className="App-Carousel">
        <Carousel className="carousel-body" indicators={ false }>
          <Carousel.Item>
            <div className="Carousel-image">
              <img
                className=""
                src={ hunt }
                alt="First slide"
              />
            </div>
            <div className="Carousel-image">
              <img
                className=""
                src={ hunt }
                alt="First slide"
              />
            </div>

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
              <h3>Vice Versa</h3>
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
    )
  }
}

export default MyCarousel;