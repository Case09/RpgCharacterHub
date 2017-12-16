import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLatestSheets } from '../actions/sheets';

class LatestSheets extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        return this.props.getLatestSheets();
    }

    render() {
        return <div>Latest sheets</div>
    }
}

function mapStateToProps(state) {
    return {
        sheets: state.sheets
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getLatestSheets: () => dispatch(getLatestSheets())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestSheets);