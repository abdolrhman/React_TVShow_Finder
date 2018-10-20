import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from '../App';
import view from './view';

/**
 * Adding home and show routes
 */
const Router = () => (

    <BrowserRouter>
    <Switch>
        <Route path="/" component={App} exact />  
        <Route path="/view/:id" component={view} />  
    </Switch>
    </BrowserRouter>


);

export default Router;