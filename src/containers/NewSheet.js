import React, { Component } from 'react';
import SheetForm from '../components/SheetForm';
import { connect } from 'react-redux';
import { createSheet } from '../actions/sheets';

class NewSheet extends Component {
    constructor(props) {
        super(props)
    }

    createNewSheet() {
        const { auth, createSheet } = this.props;
        const email = auth.user.email;
        const data = {
            name: "nesto1",
            email
        };
        
        return createSheet(data);
    }

    render() {
        const { createSheet, auth } = this.props;
        return (
            <SheetForm create={(data) => this.createNewSheet()}/>
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
        createSheet: (data) => dispatch(createSheet(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSheet);