import React, { Component } from "react";
import { login } from "../helpers/auth";
import PropTypes from 'prop-types';
import Button from "material-ui/Button";
import Dialog, {
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
  } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';  
import { FormHelperText } from 'material-ui/Form';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { signIn } from '../actions/auth';
import { validateInputValue } from './helpers/auth_helper';

/**
 * Login form component
 */

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
			email: "",
			password: "",
			emailError: false,
			passwordError: false
		}
	}

	inputChange(input, name) {
		const value = input.value;
		const validation = validateInputValue(value);
		if (name === "email") {
			return this.setState({
				email: value,
				emailError: (!validation.isValid) ? validation.text : ""
			});
		} else {
			return this.setState({
				password: value,
				passwordError: (!validation.isValid) ? validation.text : ""
			});
		}
		return;
	}

	login() {
		const { email, password, emailError, passwordError } = this.state;
		const { dispatch } = this.props;
		if (emailError || passwordError || email === "" || password === "") return;
		// Dispatching signIn action creator
		dispatch(signIn(email, password));
	}

	render() {
		const { classes, auth } = this.props;
		return (
			<div>
				<Dialog open={true} classes={{paperWidthSm: classes.paperWidthSm}}>
					<DialogTitle>Sign In</DialogTitle>
					<DialogContent classes={{root: classes.root}}>
						<TextField 
							error={!!this.state.emailError}
							label={this.state.emailError || "Email"}
							onChange={(e) => this.inputChange(e.target, "email")}
							style={{width: "100%"}} /><br />
						<TextField 
							error={!!this.state.passwordError}
							onChange={(e) => this.inputChange(e.target, "password")} 
							type="password" 
							label={this.state.passwordError || "Password"} 
							style={{width: "100%"}} />
						{auth.user === null ? <FormHelperText error={true}>Email and password combination doesn't exist</FormHelperText> : undefined}
					</DialogContent>
					<DialogActions>
						<Button onClick={() => this.login()} color="primary">
							Login
						</Button>
					</DialogActions>
					<DialogActions>
						<Link style={{textDecoration: "none", color: "inherit"}} to="/register">
							<Button color="primary">
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
	auth: PropTypes.object.isRequired,
	dispatch: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired
}

export default withStyles(style)(Login)
