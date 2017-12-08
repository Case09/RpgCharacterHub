import "./main.scss";
import "typeface-roboto"; // Material fonts
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { checkAuth } from './actions/auth';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Routes from './Routes';
import Theme from './Theme';

class Main extends Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		store.dispatch(checkAuth());
	}

	render() {
		return (
			<Provider store={store}>
				<Router>
					<Theme>
						<Routes />
					</Theme>
				</Router>
			</Provider>
		);
	}
}

ReactDOM.render(<Main/>, document.getElementById("root"));
