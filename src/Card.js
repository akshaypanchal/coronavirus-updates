import React from 'react';

const Card = ({country_name, deaths, total_recovered, cases}) =>{
	return (

	<div className= 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		<div>
			<h2>{country_name}</h2>
			<p>Total Cases: {cases}</p>
			<p>Total Deaths: {deaths}</p>
			<p>Total Recovered: {total_recovered}</p>

		</div>	
	</div>	
	);
}

export default Card;