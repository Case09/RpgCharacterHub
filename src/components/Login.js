import React, { Component } from "react";
import { login, resetPassword } from "../helpers/auth";
import Button from "material-ui/Button";
import PropTypes from 'prop-types';
import Dialog, {
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
  } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';  
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { signIn } from '../actions/auth';

const style = {
	paperWidthSm: {
		width: '350px'
	},
	root: {
		textAlign: 'center'
	}
}

class Login extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		}
	}

	inputChange(input, name) {
		const value = input.value;
		if (name === "username") {
			return this.setState({
				username: value
			});
		} else {
			return this.setState({
				password: value
			});
		}
		return;
	}

	login() {
		const { username, password } = this.state;
		const { dispatch } = this.props;
		dispatch(signIn(username, password));

	}

	render() {
		const { classes } = this.props;
		return (
			<div>
				<Dialog open={true} classes={{paperWidthSm: classes.paperWidthSm}}>
					<DialogTitle>Sign In</DialogTitle>
					<DialogContent classes={{root: classes.root}}>
						<TextField onChange={(e) => this.inputChange(e.target, "username")} label="Username" style={{width: "100%"}} /><br />
						<TextField onChange={(e) => this.inputChange(e.target, "password")} type="password" label="Password" style={{width: "100%"}} />
					</DialogContent>
					<DialogActions>
						<Button onClick={() => this.login()} color="primary">
							Login
						</Button>
					</DialogActions>
					<DialogActions>
						<Link style={{textDecoration: "none", color: "inherit"}} to="/register">
							<Button onClick={this.handleRequestClose} color="primary">
								Not signed in? Register!
							</Button>
						</Link>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

Login.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(style)(Login)
