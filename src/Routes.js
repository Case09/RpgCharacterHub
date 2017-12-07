import React, { Component } from "react";
import { PrivateRoute, PublicRoute } from "./helpers/routes";
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import Home from "./containers/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

class Routes extends Component {

	render() {
		return (
			<div>	
				<Switch>
					<Route component={Home} />
					<PublicRoute
						path="/login"
						component={Login}
					/>
					<PublicRoute
						path="/register"
						component={Register}
					/>
					<PrivateRoute
						path="/dashboard"
						component={Dashboard}
					/>
				</Switch>
			</div>
		);
	}
}

export default Routes;