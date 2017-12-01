import React, { Component } from "react";
import { login, resetPassword } from "../helpers/auth";
import Button from "material-ui/Button";
import Dialog, {
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
  } from 'material-ui/Dialog';

function setErrorMsg(error) {
	return {
		loginMessage: error
	};
}

export default class Login extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Dialog open={true}>
					<DialogTitle>Sign In</DialogTitle>
					<DialogContent>
						<DialogContentText>
						Test
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleRequestClose} color="primary">
						Test
						</Button>
						<Button onClick={this.handleRequestClose} color="primary" autoFocus>
						Test
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}
