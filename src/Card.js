import React from 'react';
import './Card.css';

const Card = ({country_name, deaths, total_recovered, cases, new_deaths, new_cases, serious_critical, active_cases, total_cases_per_1m_population}) =>{
	return (

	<div className= 'tl dib br3 ma2 grow shadow-5 w-90 color'>
		<div className="tl black">

			<h3 className="dib mr2 w-10 pa2">{country_name}</h3>
			<p className="dib mr2  w-10 pa2">{cases}</p>
			<p className="dib mr2  w-10 pa2">{deaths}</p>
			<p className="dib mr2  w-10 pa2">{total_recovered}</p>
			<p className="dib mr2  w-10 pa2">{new_cases}</p>
			<p className="dib mr2  w-10 pa2">{new_deaths}</p>
			<p className="dib mr2  w-10 pa2">{serious_critical}</p>
			<p className="dib mr2  w-10 pa2">{active_cases}</p>
			<p className="dib mr2  w-10 pa2">{total_cases_per_1m_population}</p>

		</div>	
	</div>	
	);
}

export default Card;