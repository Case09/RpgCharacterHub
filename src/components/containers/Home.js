import React from 'react';
import Layout from './Layout';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Home
                <Layout />
            </div>
        )
    }
}

export default Home;