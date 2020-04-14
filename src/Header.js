import React from 'react';
import './Header.css';

const Header = () =>{
	return(

			<div>
				<ul className="list ph3 ph5-ns pv4 w-100 white">
					<li className="dib b mr2 pa3 ">Country</li>
					<li className="dib b mr2 pa3">Total Cases</li>
					<li className="dib b mr2 pa3">Total Deaths</li>
					<li className="dib b mr2 pa3">Total Recovered</li>
					<li className="dib b mr2 pa3">New Cases</li>
					<li className="dib b mr2 pa3">New Deaths</li>
					<li className="dib b mr2 pa3">Serious Critical</li>
					<li className="dib b mr2 pa3">Active Cases</li>
					<li className="dib b mr2 pa3">Total Cases/1M Population</li>	

				</ul>
			</div>

		);
}


export default Header;