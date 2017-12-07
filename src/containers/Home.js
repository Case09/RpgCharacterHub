import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import { signOut } from '../actions/auth';
import { Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { auth, signOut } = this.props;

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



export default connect(mapStateToProps, mapDispatchToProps)(Main);