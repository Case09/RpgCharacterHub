import "./main.scss";
import "typeface-roboto"; // Material fonts
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store/store";
import { checkAuth } from './actions/auth';

import App from './app';

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
					<App />
				</Router>
			</Provider>
		);
	}
}

ReactDOM.render(<Main/>, document.getElementById("root"));
