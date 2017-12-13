import React, { Component } from 'react';
import SheetForm from '../components/SheetForm';
import { connect } from 'react-redux';
import { createSheet } from '../actions/sheets';

class NewSheet extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { createSheet } = this.props;
        return (
            <SheetForm create={(data) => createSheet(data)}/>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createSheet: (data) => dispatch(createSheet(data))
    }
}

export default connect(null, mapDispatchToProps)(NewSheet);