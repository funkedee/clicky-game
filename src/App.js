import React, {Component} from 'react';
import Header from "./components/Header";
import Directions from "./components/Directions";
import ImageCard from "./components/ImageCard/index";
import Row from "./components/Row"
import images from "./images.json"
import './App.css';
import { lookupService } from 'dns';

class App extends Component {
	state = {
		images: images,
		score: 0,
		topScore: 0,
		result: "Click an image to start",
		isClicked: []
	}

	shuffledArray = [];
	splitArray1 = [];
	splitArray2 = [];
	splitArray3 = [];

	shuffleArray = array => {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		};
		this.shuffledArray = array
	};

	splitArray = array => {
		this.splitArray1 = array.slice(0,4);
		this.splitArray2 = array.slice(4,8);
		this.splitArray3 = array.slice(8,12);
	};

	makeImageCards = array => {
		return array.map(image => <ImageCard image={image.image} id={image.id} key={image.id} handleClick={this.handleClick}/>)
	};

	handleClick = (id) => {
		let tempArray = this.state.isClicked;
		if (this.state.isClicked.includes(id)) return this.lose();
		tempArray.push(id);
		this.setState({isClicked: tempArray});
		this.setState({
			score: this.state.score + 1,
			result: "You guessed correct!"
		});
		if(this.state.score >= this.state.topScore){
			this.setState({topScore: this.state.score});
			console.log(this.state.topScore);
			console.log(this.state)
		};
		console.log(this.state.topScore);
		if(this.state.score === 12) return this.win();
	};

	lose = () => {
		this.setState({
			isClicked: [],
			result: "You lose! Guess again to restart",
			score: 0
		})
	};

	win = () => {
		this.setState({
			isClicked: [],
			result: "Congratulations, you win! Guess again to restart",
			score: 0
		})
	}

	render() {
		this.shuffleArray(this.state.images);
		this.splitArray(this.shuffledArray);
		return ( 
			<div>
				<Header result= {this.state.result} score={this.state.score} topScore={this.state.topScore}></Header>
				<Directions></Directions>
				<div className="container mx-auto">
					<Row>
						{this.makeImageCards(this.splitArray1)}
					</Row>
					<Row>
						{this.makeImageCards(this.splitArray2)}
					</Row>
					<Row>
						{this.makeImageCards(this.splitArray3)}
					</Row>
				</div>
			</div>
		);
	}
}
export default App;