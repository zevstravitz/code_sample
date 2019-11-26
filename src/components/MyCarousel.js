import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

import '../styling/MyCarousel.css';


// standard images
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
        color: "#3e6aa7"
      },
      {
        title: 'Hunt for the WildPeople',
        text: 'Raised on hip-hop and foster care, defiant city kid Ricky gets a fresh start in the New Zealand countryside. From the director of What We Do In The Shadows.',
        image: hunt,
        color: "#3a56b5"
      },
      {
        title: 'Nichts passiert / A Decent Man',
        text: 'A Swiss family takes a ski vacation and runs into trouble when the father, the titular decent man, finds himself in a series of moral quandries.',
        image: nichts,
        color: "#4bc4f1"
      },
      {
        title: 'Vice Versa',
        text: 'Come along with the Good Company crew as they travel thoughout the US, Japan, BC and Quebec to showcase skiiing in the best way possible.',
        image: viceversa,
        color: "#b1a726"
      },
      {
        title: 'Fullmoon',
        text: 'Be inspired by women who push boundaries. FULL MOON showcases the legends, current icons and future prodigies of this ever-evolving lifefstyle sport.',
        image: fullmoon,
        color: "#979799"
      },
    ],
  }

  render() {
    return (
      <div className="App-Carousel">
        <Carousel className="carousel-body" indicators={ false } interval={10000}>
              {this.state.movies.map((movies, index) => {
                return <Carousel.Item key={index}>
                    <div>
                      <img
                        className="Carousel-image"
                        src={ movies.image }
                        alt= {movies.title}
                      />
                    </div>
                    <div className="info">
                    <Carousel.Caption>
                        <div className="movie-poster">
                          <img
                            src={ movies.image }
                            alt= {movies.title}
                            height="300px"
                            className="poster"
                          />
                        </div>
                      <div className="info">
                        <h3>{ movies.title}</h3>
                        <p>{ movies.text}</p>
                        <Button id="buy"
                                style={{ backgroundColor: movies.color,
                                         borderColor: movies.color }}
                                >Buy Now</Button>
                        <Button id="trailer" variant="outline" style={{ borderColor: "#cfcfcf" }}>Watch Trailer</Button>
                      </div>
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