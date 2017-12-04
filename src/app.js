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

class App extends Component {

	render() {
		const { auth, dispatch } = this.props;
		return (
			<div>
				{/* Always render Home page with nav bar */}
				<Route exact component={Home} />
					<PublicRoute
						authed={() => auth.isAuthenticated}
						path="/login"
						component={(props) => <Login auth={auth} dispatch={dispatch} {...props} />}
					/>
					<PublicRoute
						authed={() => auth.isAuthenticated}
						path="/register"
						component={Register}
					/>
					<PrivateRoute
						authed={() => auth.isAuthenticated}
						path="/dashboard"
						component={Dashboard}
					/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth,
		dispatch: state.dispatch
	}
}

export default withRouter(connect(mapStateToProps)(App));