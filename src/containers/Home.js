import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import { signOut } from '../actions/auth';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { auth, signOut } = this.props;
        return (
            <div>
                <NavBar auth={auth} signOut={() => signOut()}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signOut: dispatch(signOut())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Main);