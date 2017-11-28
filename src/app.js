import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import InviteContainer from "./containers/index.js";
import store from "./store/store";
import "./styles/main.scss";
import 'typeface-roboto'; // Material fonts

class Main extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<InviteContainer />
			</Provider>
		)
	}
}

ReactDOM.render(<Main />, document.getElementById("container"));
