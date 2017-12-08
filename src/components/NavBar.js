import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from "material-ui/Button";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";

const NavBar = ({auth, signOut}) => {
	return (
		<AppBar style={{margin: 0}} position="static" color="primary">
			<Toolbar>
				<Typography type="title" color="inherit">
					RPG-CHub
				</Typography>
					{
						!auth.isAuthenticated ? 
						<Link style={{position: "absolute", right: "10px", textDecoration: "none", color: "inherit"}} to="/login">
							<Button color="contrast">Login</Button>
						</Link> : 
						<Button style={{position: "absolute", right: "10px"}} onClick={() => signOut()} color="contrast">Logout</Button>
					}
			</Toolbar>
		</AppBar>
	)
}

NavBar.propTypes = {
	auth: PropTypes.object.isRequired,
	signOut: PropTypes.func.isRequired
}

export default NavBar;