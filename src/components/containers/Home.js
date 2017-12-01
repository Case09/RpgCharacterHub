import React, { Component } from 'react';
import NavBar from '../NavBar';

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

export default Main;