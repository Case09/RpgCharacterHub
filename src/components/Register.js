import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import { signUp } from '../actions/auth';

import Button from "material-ui/Button";
import Dialog, {
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
  } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';  
import { FormHelperText } from 'material-ui/Form';
import { indigo } from 'material-ui/colors';


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
			username: "",
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
		} else if(name === "username") {
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

	signUp() {
		const { dispatch } = this.props;
		const { email, password, username } = this.state;
		if (email === "" || password === "" || username === "") return;
		dispatch(signUp(email, password, username));
	}

    render() {
		const { classes, auth } = this.props;
        return (
            <div>
                <Dialog open={true} classes={{paperWidthSm: classes.paperWidthSm}}>
					<DialogTitle>Sign Up</DialogTitle>
					<DialogContent classes={{root: classes.root}}>
						<TextField 
							label="User Name"
							onChange={(e) => this.inputChange(e.target, "username")}
							style={{width: "100%"}} /><br />
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

function mapStateToProps(state) {
	return {
		auth: state.auth,
		dispatch: state.dispatch
	}
}

Register.propTypes = {
	auth: PropTypes.object.isRequired,
	dispatch: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired
}

export default withStyles(style)(connect(mapStateToProps)(Register));