import React from 'react';

const Card = ({country_name, deaths, total_recovered, cases, new_deaths, new_cases, serious_critical, active_cases, total_cases_per_1m_population}) =>{
	return (

	<div className= 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		<div>
			<h2>{country_name}</h2>
			<p>Total Cases: {cases}</p>
			<p>Total Deaths: {deaths}</p>
			<p>Total Recovered: {total_recovered}</p>
			<p>New Cases: {new_cases}</p>
			<p>New Deaths: {new_deaths}</p>
			<p>Serious Critical: {serious_critical}</p>
			<p>Active Cases: {active_cases}</p>
			<p>Total Cases per 1M Population: {total_cases_per_1m_population}</p>

		</div>	
	</div>	
	);
}

export default Card;