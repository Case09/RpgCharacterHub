import React, { Component } from "react";
import Button from "material-ui/Button";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<AppBar style={{margin: 0}} position="static" color="primary">
					<Toolbar>
						<Typography type="title" color="inherit">
							Rpg Character Hub
						</Typography>
                        <Button style={{position: "absolute", right: "10px"}} color="contrast">
							<Link style={{textDecoration: "none", color: "inherit"}} to="/login">Sign In/Up</Link>
						</Button>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}
