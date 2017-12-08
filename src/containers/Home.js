import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signOut } from '../actions/auth';
import { withRouter } from 'react-router-dom';

import NavBar from '../components/NavBar';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { auth, signOut } = this.props;

        if (auth.isAuthenticated !== undefined) {
            if (auth.isAuthenticated) {
                return (
                    <div>
                        <NavBar auth={auth} signOut={() => signOut()}/>
                        <Redirect to="/dashboard" />
                    </div>
                )
            } else {
                return (
                    <div>
                        <NavBar auth={auth} signOut={() => signOut()}/>
                        <Redirect to="/login" />
                    </div>
                )
            }
        } else {
            return <div></div>
        }
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));