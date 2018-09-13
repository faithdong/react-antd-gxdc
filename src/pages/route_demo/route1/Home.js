/*
 * @Author: zhongxd 
 * @Date: 2018-09-13 21:38:46 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-13 22:00:33
 * 
 * React-Route 4.0 demo
 */

import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Main from './Main';
import About from './About';
import Topics from './Topics';

export default class Home extends React.Component {


	render() {
		return (
			<HashRouter>
				<div>
					<ul>
						<li>
							<Link to="/">Main</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/topics">Topics</Link>
						</li>
					</ul>

					<hr />

					<Route exact path="/" component={Main} />
					<Route path="/about" component={About} />
					<Route path="/topics" component={Topics} />
				</div>
			</HashRouter>
		)
	}
}