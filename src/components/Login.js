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
import { connect } from 'react-redux';

/**
 * Login form component
 */

const style = theme => ({
	paperWidthSm: {
		width: '350px'
	},
	root: {
		textAlign: 'center'
	}
});

class Login extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		}
	}

	inputChange(input, name) {
		const value = input.value;
		if (name === "email") {
			return this.setState({
				email: value
			});
		} else {
			return this.setState({
				password: value
			});
		}
		return;
	}

	login() {
		const { email, password } = this.state;
		const { dispatch } = this.props;
		if (email === "" || password === "") return;
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
							label="Email"
							onChange={(e) => this.inputChange(e.target, "email")}
							style={{width: "100%"}} /><br />
						<TextField 
							onChange={(e) => this.inputChange(e.target, "password")} 
							type="password" 
							label="Password"
							style={{width: "100%"}} />
						{!!auth.errorMessage ? <FormHelperText error={true}>{auth.errorMessage}</FormHelperText> : undefined}
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

function mapStateToProps(state) {
	return {
		auth: state.auth,
		dispatch: state.dispatch
	}
}

Login.propTypes = {
	auth: PropTypes.object.isRequired,
	dispatch: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired
}

export default withStyles(style)(connect(mapStateToProps)(Login));
