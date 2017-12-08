import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DashboardLayout from '../components/DashboardLayout';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <DashboardLayout />
            </div>
        )
    }
};

export default Dashboard;