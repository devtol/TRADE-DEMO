import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

const routes = () => {
    return (
        <Switch>
            <Route exact path='/home' component={Home} />
        </Switch>
    )
}

export default routes
