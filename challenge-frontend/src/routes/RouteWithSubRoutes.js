import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router';
import {getItem} from '../utils/localStorage';

let userLogged = getItem("userLogged");

export const RouteWithSubRoutes = (route) => {
  
    return (
        route.isPrivate ? PrivateRoute(route) : PublicRoute(route)
    )
}


const PrivateRoute = (route) => {

    useEffect(() => {
        userLogged = getItem("userLogged");
    }, [route]);

    return (
        <Route
            path={route.path}
            render={props => (
                userLogged ?
                    <route.component {...props} routes={route.routes} /> :
                    <Redirect to="/login" />
            )}
        />
    )
}

const PublicRoute = (route) => {

    useEffect(() => {
        userLogged = getItem("userLogged");
    }, [route]);

    return (
        <Route
            path={route.path}
            render={props => (
                !userLogged ?
                    <route.component {...props} routes={route.routes} /> :
                    <Redirect to="/app" />
            )}
        />
    )
}

