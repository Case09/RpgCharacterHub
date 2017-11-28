import React from 'react';
import { Route } from 'react-router-dom';
import Main from './components/containers/Main';

export default function() {
    return (
        <div>
            <Route path="/" component={Main} />
        </div>
    )
}