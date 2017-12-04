import "./main.scss";
import "typeface-roboto"; // Material fonts
import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store/store";
import { database, firebaseAuth } from "./config/database";
import { PrivateRoute, PublicRoute } from "./helpers/routes";
import { checkAuth } from './actions/auth';

import Home from "./components/containers/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

class Main extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		store.dispatch(checkAuth());
	}

	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
						<Switch>
							<Route exact path="/" component={Home} />
							<PublicRoute
								authed={() => store.getState().auth.isAuthenticated}
								path="/login"
								component={Login}
							/>
							<PublicRoute
								authed={() => store.getState().auth.isAuthenticated}
								path="/register"
								component={Register}
							/>
							<PrivateRoute
								authed={() => store.getState().auth.isAuthenticated}
								path="/dashboard"
								component={Dashboard}
							/>
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}

ReactDOM.render(<Main/>, document.getElementById("root"));
