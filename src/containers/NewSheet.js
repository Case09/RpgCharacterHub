import React, { Component } from 'react';
import SheetForm from '../components/SheetForm';
import { connect } from 'react-redux';
import { createSheet } from '../actions/sheets';

class NewSheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            public: false
        }
    }

    createNewSheet() {
        const { auth, createSheet } = this.props;
        const uid = auth.user.uid;
        const isPublic = this.state.public;

        const data = {
            ...this.state
        };
        // Making sheet object
        const sendData = {
            uid,
            isPublic,
            data
        }
        
        return createSheet(sendData);
    }

    // TextField onChange
    onInputChange(e, label) {
        const value = e.target.value;
        this.setState({
            [label]: value
        });
    }

    // Make Public checkbox control, passing boolean value from state
    makePublic(e, name) {
        this.setState({
            [name]: e.target.checked
        });
    }

    render() {
        const { createSheet, auth } = this.props;
        return (
            <SheetForm 
                onInputChange={(e, label) => this.onInputChange(e, label)}
                isPublic={this.state.public}
                makePublic={(e, name) => this.makePublic(e, name)}
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
        createSheet: (sendData) => dispatch(createSheet(sendData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSheet);