import React from 'react';
import Layout from './Layout';
import Button from 'material-ui/Button';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Button>Test</Button>
            </Layout>
        )
    }
}

export default Main;