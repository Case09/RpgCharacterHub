import React, { Component } from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NewSheet from '../components/NewSheet';

class Sheets extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { match } = this.props;
        return (
            <div>
                <h1>hello</h1>
                <Route path={`${match.url}/new`} component={NewSheet} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

Sheets.propTypes = {
    match: PropTypes.object.isRequired
}

export default withRouter(connect(mapStateToProps)(Sheets));