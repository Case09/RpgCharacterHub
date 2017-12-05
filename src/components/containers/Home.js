import React, { Component } from 'react';
import NavBar from '../NavBar';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { auth, dispatch } = this.props;
        return (
            <div>
                <NavBar auth={auth} dispatch={dispatch}/>
            </div>
        )
    }
}

export default Main;