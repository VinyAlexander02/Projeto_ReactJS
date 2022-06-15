import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Registration } from '../pages/Registration';
import { Home } from '../pages/Home';
import { Sales } from '../pages/Sales';
import { Side } from '../pages/Side_dish';

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route component={Home} path='/' exact />
            <Route component={Registration} path='/cadastro' />
            <Route component={Sales} path='/vendas' />
            <Route component={Side} path='/acompanhamento' />
        </Switch>
    )
}