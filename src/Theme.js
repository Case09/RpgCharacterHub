import React, { Component } from 'react';
import deepOrange from "material-ui/colors/deepOrange";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

const theme = createMuiTheme({
	palette: {
		primary: deepOrange
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