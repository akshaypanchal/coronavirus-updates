import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{

	console.log(robots);
	const CardArray = robots.map((user,i) =>{
		return (<Card key={i}  
					country_name={robots[i].country_name} 
					cases={robots[i].cases} 
					deaths={robots[i].deaths}
					total_recovered={robots[i].total_recovered} />);
	})

	return(
		<div>
			
			{CardArray}

		</div>);
}

export default CardList;