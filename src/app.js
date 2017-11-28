import "./main.scss";
import "typeface-roboto"; // Material fonts
import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store/store";
import { database, firebaseAuth } from "./config/database";
import { PrivateRoute, PublicRoute } from "./helpers/routes";

import Home from "./components/containers/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			authed: false,
			loading: true
		};
	}

	componentDidMount() {
		this.removeListener = firebaseAuth().onAuthStateChanged(user => {
			if (user) {
				this.setState({
					authed: true,
					loading: false
				});
			} else {
				this.setState({
					authed: false,
					loading: false
				});
			}
		});
	}

	componentWillUnmount() {
		this.removeListener();
	}

	render() {
		const { store } = this.props;
		return (
			<Provider store={store}>
				<Router>
					<div>
						{ /* Not setting path makes this render for every /** path, makes nested routing basically */ }
						<Route exact component={Home} />
						<Switch>
							<PublicRoute
								authed={this.state.authed}
								path="/login"
								component={Login}
							/>
							<PrivateRoute
								authed={this.state.authed}
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

Main.propTypes = {
	store: PropTypes.object.isRequired
};

ReactDOM.render(<Main store={store} />, document.getElementById("root"));
