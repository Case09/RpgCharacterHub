import React, { Component } from 'react';
import Button from "material-ui/Button";
import Dialog, {
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
  } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';  
import { Link } from 'react-router-dom';
import withStyles from 'material-ui/styles/withStyles';
import { validateInputValue } from './helpers/auth_helper';
import { indigo } from 'material-ui/colors';
import { signUp } from '../actions/auth';

const style = {
	paperWidthSm: {
		width: '350px'
	},
	root: {
		textAlign: 'center'
	}
}

/*
 * Registration form component
*/

class Register extends Component {

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

	signUp() {
		const { dispatch } = this.props;
		const { email, password, emailError, passwordError } = this.state;
		if (emailError || passwordError || email === "" || password === "") return;
		dispatch(signUp(email, password));
	}

    render() {
		const { classes } = this.props;
        return (
            <div>
                <Dialog open={true} classes={{paperWidthSm: classes.paperWidthSm}}>
					<DialogTitle>Sign Up</DialogTitle>
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
					</DialogContent>
					<DialogActions>
						<Link style={{textDecoration: "none"}} to="/login">
							<Button color="primary">Back</Button>
						</Link>
						<Button onClick={() => this.signUp()} color="primary">
							Sign Up
						</Button>
					</DialogActions>
				</Dialog>
            </div>
        )
    }
}

export default withStyles(style)(Register);