import React, { Component } from "react";
import { PrivateRoute, PublicRoute } from "./helpers/routes";
import { checkAuth } from './actions/auth';
import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Home from "./components/containers/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

// All routes are located here, also app is connected to redux store here

class Routes extends Component {

	render() {
		const { auth, dispatch } = this.props;
		// so checks against isAuthenticated can pass
		if (auth.isAuthenticated !== undefined) {
			return (
				<div>
					{/* Always render Home page with nav bar 
						- auth.isAuthenticated is used to render or redirect if false, depending on if it's private or public router
						- routerProps are passed, alongside with custom props that is passed via mapStateToProps
					*/}
					<Route exact component={() => <Home auth={auth} dispatch={dispatch} />} />
					<PublicRoute
						authed={() => auth.isAuthenticated}
						path="/login"
						component={(routerProps) => <Login auth={auth} dispatch={dispatch} {...routerProps} />}
					/>
					<PublicRoute
						authed={() => auth.isAuthenticated}
						path="/register"
						component={(routerProps) => <Register dispatch={dispatch} {...routerProps} />}
					/>
					<PrivateRoute
						authed={() => auth.isAuthenticated}
						path="/dashboard"
						component={Dashboard}
					/>
				</div>
			);
		} else {
			return <div></div>
		}
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth,
		dispatch: state.dispatch
	}
}

export default withRouter(connect(mapStateToProps)(Routes));