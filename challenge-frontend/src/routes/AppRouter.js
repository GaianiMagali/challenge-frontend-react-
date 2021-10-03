import React from 'react';
import { Switch } from 'react-router';
import { RouteWithSubRoutes } from './RouteWithSubRoutes';

export const AppRouter = ({ routes }) => {
    return (
        <Switch>
            {
                routes.map((route, i) =>
                    <RouteWithSubRoutes key={i}  {...route} />
                )
            }
        </Switch>
    )
}
