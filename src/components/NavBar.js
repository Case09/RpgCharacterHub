import React from "react";
import Button from "material-ui/Button";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";

export default class NavBar extends React.Component {
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
                        <Button style={{position: "absolute", right: "10px"}} color="contrast">Sign In/Up</Button>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}
