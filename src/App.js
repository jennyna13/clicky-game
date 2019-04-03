import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import dogs from "./dogs.json";

class App extends Component {

  state = {
    dogs,
    score: 0,
    highscore: 0,
    message:"",
    clickedArray:[],
  };

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  handleClick = id => {
    const shuffleArray = this.shuffleArray(dogs);
    this.setState({dogs: shuffleArray});

    if (this.state.clickedArray.includes(id)) {
      this.setState({score: 0, clickedArray: [], message: "Incorrect ☹️! Try again!"});
    } 
      else {
        this.setState({
          clickedArray:this.state.clickedArray.concat([id]),
          socre:this.state.score + 1,
          message: "Correct!",
        });
      }
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score});
    }
  }
  render() {
    return (
      <Wrapper> 
        <Title>Click on an image to earn points, but don't click on any more than once!</Title>
        {this.state.dogs.map(dog => (
            <Card
            handleClick={this.handleClick}
            id= {dog.id}
            key={dog.id}
            image={dog.image}
            score = {this.state.score}
            />
          ))}
    </Wrapper>
    );
  }
}

export default App;
