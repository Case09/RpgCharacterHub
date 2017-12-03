import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom'

export function PrivateRoute({ component: Component, authed, ...rest }) {
	const isAuthenticated = authed();
	return (
		<Route
			{...rest}
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

export function PublicRoute({ component: Component, authed, ...rest }) {
	const isAuthenticated = authed();
	return (
		<Route
			{...rest}
			render={props =>
				isAuthenticated === false ? (
					<Component {...props} />
				) : (
					<Redirect to="/" />
				)
			}
		/>
	);
}