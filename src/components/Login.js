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

const style = {
	fullWidth: {
		width: '30%'
	}
}

class Login extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		const { classes } = this.props;
		return (
			<div>
				<Dialog open={true} className={classes.paper}>
					<DialogTitle>Sign In</DialogTitle>
					<DialogContent>
						<TextField label="Username" style={{width: 200}} /><br />
						<TextField type="password" label="Password" style={{width: 200}} />
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleRequestClose} color="primary">
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
	children: PropTypes.node,
	classes: PropTypes.object.isRequired
}

export default withStyles(style)(Login)
