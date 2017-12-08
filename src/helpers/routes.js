import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Private = ({ component: Component, auth, ...rest }) => {
	const isAuthenticated = auth.isAuthenticated;

	if (isAuthenticated !== undefined) {
		return (
			<Route {...rest}
				render={props =>
					isAuthenticated === true ? (
						<Component {...props} />
					) : (
						<Redirect
							to={{
								pathname: "/login"
							}}
						/>
					)
				}
			/>
		);
	} else {
		return <div></div>
	}
	
}

export const PrivateRoute = withRouter(connect(mapStateToProps)(Private));

function mapStateToProps(state) {
	return {
		auth: state.auth
	}
}

const Public = ({ component: Component, auth, ...rest }) => {
	const isAuthenticated = auth.isAuthenticated;
	if (isAuthenticated !== undefined) {
		return (
			<Route {...rest}
				render={props =>
					isAuthenticated === false ? (
						<Component {...props} />
					) : (
						<Redirect
							to={{
								pathname: "/dashboard"
							}}
						/>
					)
				}
			/>
		);
	} else {
		return <div></div>
	}
	
}

export const PublicRoute = withRouter(connect(mapStateToProps)(Public));

