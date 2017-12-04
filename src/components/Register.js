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

export default class Register extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Dialog open={true}>
					<DialogTitle>Sign Up</DialogTitle>
					<DialogContent>
						<TextField label="Username or e-mail address" style={{width: 200}} /><br />
						<TextField type="password" label="Password" style={{width: 200}} />
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleRequestClose} color="primary">
						Sign Up
						</Button>
					</DialogActions>
				</Dialog>
            </div>
        )
    }
}