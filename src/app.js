import "./styles/main.scss";
import 'typeface-roboto'; // Material fonts
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store/store";
import routes from './routes';

class Main extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					{routes()}
				</Router>
			</Provider>
		)
	}
}

ReactDOM.render(<Main />, document.getElementById("root"));
