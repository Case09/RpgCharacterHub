import React, { Component } from "react";
import { login, resetPassword } from "../helpers/auth";
import Button from "material-ui/Button";
import Dialog, {
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
  } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';  
import './styles.scss';

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
			<div className="loginModal">
				<Dialog open={true}>
					<DialogTitle>Sign In</DialogTitle>
					<DialogContent>
						<TextField label="Username" style={{width: 200}} /><br />
						<TextField label="Password" style={{width: 200}} />
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleRequestClose} color="primary">
						Login
						</Button>
					</DialogActions>
					<DialogActions>
						<Button onClick={this.handleRequestClose} color="primary">
						Not signed in? Register!
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}
