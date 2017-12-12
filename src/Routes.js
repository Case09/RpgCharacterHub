import React, { Component } from "react";
import { PrivateRoute, PublicRoute } from "./helpers/routes";
import { Route, Switch, withRouter } from 'react-router-dom';

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./containers/Home";
import Dashboard from "./components/Dashboard";
import Sheets from "./containers/Sheets";

// /sheets list of my sheets
// /sheets/new create new sheet
// /sheets/:id view sheet
// /sheets/edit/:id edit sheet
// /public-sheets view list of all public sheets
// /public-sheets/:id view public sheet
// /favorites /favorite sheets

class Routes extends Component {

	render() {
		return (
			<div>	
				<Home />
				<Switch>
					<PublicRoute exact path="/" />
					<PublicRoute path="/login" component={Login} />
					<PublicRoute path="/register" component={Register} />
					<PrivateRoute path="/dashboard" component={Dashboard} />
					<PrivateRoute path="/sheets" component={Sheets} />
				</Switch>
			</div>
		);
	}
}

export default Routes;