import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/containers/Home';

export default function() {
    return (
        <div>
            <Route path="/" component={Home} />
        </div>
    )
}