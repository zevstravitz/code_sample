import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import '../styling/MyCarousel.css';

import hunt from '../images/hunt.jpg';
import nichts from '../images/nichts.jpg';
import viceversa from '../images/viceversa.png';
import fourthphase from '../images/fourthphase.jpg';
import fullmoon from '../images/fullmoon.jpg';

class MyCarousel extends Component {
  state = {
    movies: [
      {
        title: 'The Fourth Phase',
        text: 'From the creators of The Art of Flight, Red Bull Media House presents THE FOURTH PHASE, a nowboarding epic starring iconic athlete Travis Rice.',
        image: fourthphase,
        color: "blue"
      },
      {
        title: 'Hunt for the WildPeople',
        text: 'Raised on hip-hop and foster care, defiant city kid Ricky gets a fresh start in the New Zealand countryside. From the director of What We Do In The Shadows.',
        image: hunt,
        color: "blue"
      },
      {
        title: 'Nichts passiert / A Decent Man',
        text: 'A Swiss family takes a ski vacation and runs into trouble when the father, the titular decent man, finds himself in a series of moral quandries.',
        image: nichts,
        color: "navy"
      },
      {
        title: 'Vice Versa',
        text: '',
        image: viceversa,
        color: "gold"
      },
      {
        title: 'Fullmoon',
        text: '',
        image: fullmoon,
        color: "gold"
      },
    ],
  }

  render() {
    return (
      <div className="App-Carousel">
        <Carousel className="carousel-body" indicators={ false }>
              {this.state.movies.map((movies) => {
                return <Carousel.Item>
                    <div >
                      <img
                        className="Carousel-image"
                        src={ movies.image }
                        alt= {movies.title}
                      />
                    </div>
                    <div>
                    <Carousel.Caption>
                      <h3>{ movies.title}</h3>
                      <p>{ movies.text}</p>
                    </Carousel.Caption>
                  </div>
               </Carousel.Item>
              })}
        </Carousel>
      </div>
    )
  }
}

export default MyCarousel;