import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Private = ({ component: Component, auth, ...rest }) => {
	const isAuthenticated = auth.isAuthenticated;
	return (
		<Route {...rest}
			render={props =>
				isAuthenticated === true ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: props.location }
						}}
					/>
				)
			}
		/>
	);
}

export const PrivateRoute = connect(mapStateToProps)(Private);

function mapStateToProps(state) {
	return {
		auth: state.auth
	}
}

const Public = ({ component: Component, auth, ...rest }) => {
	const isAuthenticated = auth.isAuthenticated;
	return (
		<Route {...rest}
			render={props =>
				isAuthenticated === false ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: "/dashboard",
							state: { from: props.location }
						}}
					/>
				)
			}
		/>
	);
}

export const PublicRoute = connect(mapStateToProps)(Public);

