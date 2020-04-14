import React from 'react';
import './Worldstat.css';

const Worldstat = ({worldstat}) =>{

	return(
			<div>
				<div className="dib mt1 mb2 ph3 b">
					<p>Total Cases</p>
					<p>{worldstat.total_cases}</p>
				</div>
				<div className="dib mt1 mb2 ph3 b">
					<p>Total Deaths</p>
					<p>{worldstat.total_deaths}</p>
				</div>
				<div className="dib mt1 mb2 ph3 b">
					<p>Total Recovered</p>
					<p>{worldstat.total_recovered}</p>
				</div>
				<div className="dib mt1 mb2 ph3 b">
					<p>New Cases</p>
					<p>{worldstat.new_cases}</p>
				</div>
				<div className="dib mmt1 mb2 ph3 b">
					<p>New Deaths</p>
					<p>{worldstat.new_deaths}</p>
				</div>

			</div>
		);
}

export default Worldstat;