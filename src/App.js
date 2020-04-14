import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';




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

		// const filteredRobots = this.state.robots.filter(robot=>{
		// 	return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		// })

		return (
			<div className="tc">
				<h1>Corona Virus Latest Updates</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots={this.state.robots} />
			</div>
		);
	}
	
}
export default App;