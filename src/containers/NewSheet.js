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
            ...this.state
        };
        
        return createSheet(email, data);
    }

    onInputChange(e, label) {
        const value = e.target.value;
        this.setState({
            [label]: value
        });
    }

    render() {
        const { createSheet, auth } = this.props;
        return (
            <SheetForm 
                onInputChange={(e, label) => this.onInputChange(e, label)}
                create={(data) => this.createNewSheet()}/>
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
        createSheet: (email, data) => dispatch(createSheet(email, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSheet);