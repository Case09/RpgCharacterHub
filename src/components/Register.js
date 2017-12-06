import React, { Component } from 'react';
import Button from "material-ui/Button";
import { Link } from 'react-router-dom';
import Dialog, {
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
  } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';  
import { FormHelperText } from 'material-ui/Form';
import withStyles from 'material-ui/styles/withStyles';
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

	signUp() {
		const { dispatch } = this.props;
		const { email, password } = this.state;
		if (email === "" || password === "") return;
		dispatch(signUp(email, password));
	}

    render() {
		const { classes, auth } = this.props;
        return (
            <div>
                <Dialog open={true} classes={{paperWidthSm: classes.paperWidthSm}}>
					<DialogTitle>Sign Up</DialogTitle>
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