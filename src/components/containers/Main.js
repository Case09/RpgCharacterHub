import React from 'react';
import Layout from './Layout';
import Dashboard from '../Dashboard';
import Button from 'material-ui/Button';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Dashboard />
            </Layout>
        )
    }
}

export default Main;