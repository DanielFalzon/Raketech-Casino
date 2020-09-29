import Axios from "axios";
import React, { Component } from "react";
import CarouselCard from "../ItemComponents/CarouselCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 1,
      firstIndex: 0,
      lastIndex: 2,
      isLoaded: false,
      casinos: [],
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:8000/wp-json/wp/v2/casino").then((res) =>
      this.setState({
        isLoaded: true,
        casinos: res.data
      })
    );
  }

  filterCasinos(firstIndex, lastIndex, activeIndex, casinos) {
    let filteredCasinos = [];

    let firstIndexCasino = casinos[firstIndex];
    firstIndexCasino.carouselType = "small";

    let activeCasino = casinos[activeIndex];
    activeCasino.carouselType = "large";

    let lastIndexCasino = casinos[this.state.lastIndex];
    lastIndexCasino.carouselType = "small";

    filteredCasinos.push(firstIndexCasino, activeCasino, lastIndexCasino);

    return filteredCasinos;
  }

  changeCards(dir){
    const {activeIndex} = this.state;
    switch(dir){
        case "next":
            let newFirstIndex = this.state.firstIndex - 1;

            if(newFirstIndex < 0){
                newFirstIndex = this.state.casinos.length -1;
            }

            this.setState({
                firstIndex: newFirstIndex,
                lastIndex: this.state.activeIndex,
                activeIndex: this.state.firstIndex
            })

            break;
        case "prev":
            let newLastIndex = this.state.lastIndex + 1;

            if(newLastIndex > this.state.casinos.length - 1){
                newLastIndex = 0;
            }

            this.setState({
                firstIndex: activeIndex,
                activeIndex: this.state.lastIndex,
                lastIndex: newLastIndex
            })
            break;
        default:
            return
    }
  }

  render() {
    const {
      casinos,
      isLoaded,
      firstIndex,
      lastIndex,
      activeIndex,
    } = this.state;

    if (isLoaded) {
      return (
        <div className="carousel-container">
          <span className="display-4 text-primary carousel-container--arrow__hover">
            <FontAwesomeIcon
              icon={faAngleLeft}
              onClick={() => this.changeCards("prev") }
            />
          </span>
          {this.filterCasinos(firstIndex, lastIndex, activeIndex, casinos).map(
            (casino, index) => (
              <CarouselCard
                key={index}
                casino={casino}
                type={casino.carouselType}
              />
            )
          )}
          <span className="display-4 text-primary carousel-container--arrow__hover">
            <FontAwesomeIcon
              icon={faAngleRight}
              onClick={() => this.changeCards("next") }
            />
          </span>
        </div>
      );
    }
    return <p className="w-50">Loading...</p>;
  }
}
