import React, { Component } from 'react';
import NavBar from '../NavBar';
import { connect } from 'react-redux';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar />
                {this.props.children}
            </div>
        )
    }
}

function mapStateTopProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateTopProps)(Main);