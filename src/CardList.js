import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{

	const CardArray = robots.map((user,i) =>{
		
		if(robots[i].country_name !== ""){
		return (<Card key={i}  
					country_name={robots[i].country_name} 
					cases={robots[i].cases} 
					deaths={robots[i].deaths}
					total_recovered={robots[i].total_recovered}
					new_deaths ={robots[i].new_deaths}
					new_cases= {robots[i].new_cases}
					serious_critical = {robots[i].serious_critical}
					active_cases= {robots[i].active_cases}
					total_cases_per_1m_population = {robots[i].total_cases_per_1m_population} />);
	}

	})

	return(
		<div>
			
			{CardArray}

		</div>);
}

export default CardList;