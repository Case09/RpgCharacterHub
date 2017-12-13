import React, { Component } from 'react';
import deepOrange from "material-ui/colors/deepOrange";
import deepPurple from "material-ui/colors/deepPurple";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

// Theme configuration
const theme = createMuiTheme({
	palette: {
		primary: deepOrange,
		secondary: {
			...deepPurple
		}
	},
	status: {
		danger: "orange"
	}
});

export default class Theme extends Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				{this.props.children}
			</MuiThemeProvider>
		)
	}
}