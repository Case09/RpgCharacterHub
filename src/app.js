import "./main.scss";
import "typeface-roboto"; // Material fonts
import React from "react";
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store/store";
import routes from "./routes";

class Main extends React.Component {
	render() {
		const { store } = this.props;
		return (
			<Provider store={store}>
				<Router>
					{routes()}
				</Router>
			</Provider>
		);
	}
}

Main.propTypes = {
	store: PropTypes.object.isRequired
};

ReactDOM.render(<Main store={store}/>, document.getElementById("root"));
