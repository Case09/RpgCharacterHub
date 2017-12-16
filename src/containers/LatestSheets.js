import React, { Component } from 'react';
import { connect } from 'react-redux';

class LatestSheets extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>Latest sheets</div>
    }
}

export default connect()(LatestSheets);