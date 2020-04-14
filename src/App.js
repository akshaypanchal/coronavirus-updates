import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Header from './Header';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {

	"particles": {
	        "number": {
	            "value": 20,
	            "density": {
	                "enable": true,
	                "value_area": 800
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 1,
	            "out_mode": "out"
	        },
	        "shape": {
	            "type": [
	                "images",
	                "circle"
	            ],
	            "images": [
	                {
	                    "src": "../Coronavirus.svg",
	                    "height": 20,
	                    "width": 23
	                },
	            ]
	        },
	        "color": {
	            "value": "#CCC"
	        },
	        "size": {
	            "value": 30,
	            "random": false,
	            "anim": {
	                "enable": true,
	                "speed": 4,
	                "size_min": 10,
	                "sync": false
	            }
	        }
	    },
	    "retina_detect": false

}






class App extends  React.Component {

	constructor(props){
		super(props);
		this.state={
			robots: [],
			searchfield: ''
		}

	}

	componentDidMount(){
		fetch("https://coronavirus-monitor-v2.p.rapidapi.com/coronavirus/cases_by_country.php", {
				"method": "GET",
				"headers": {
						"x-rapidapi-host": "coronavirus-monitor-v2.p.rapidapi.com",
						"x-rapidapi-key": "bc672e1d75msh8d1d6b258eaa990p101570jsn50767165a40f"
					}
					})
			.then(response => response.json())
			.then(users => {
				this.setState({robots: users.countries_stat});
			})
			.catch(err => {
				console.log("Akshay Panchal"+err);
			});

	}	

	onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value });
	}

	render(){

		const filteredRobots = this.state.robots.filter(robot=>{
			return robot.country_name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		return (
			<div className="tc bg-image">
				<h1 className="white">Corona Virus Latest Updates</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Header />
				<CardList robots={filteredRobots} />
				<Particles className="particles" params={particlesOptions} />
			</div>
		);
	}
	
}
export default App;