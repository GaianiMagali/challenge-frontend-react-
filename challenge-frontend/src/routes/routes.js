import { Redirect } from "react-router";
import { HeroeDetailPage } from "../pages/HeroeDetailPage";
import { HomePage } from "../pages/HomePage";
import { SearchPage } from "../pages/SearchPage";
import { SignInPage } from "../pages/SignInPage";
import { DashboardRoutes } from "./DashboardRoutes";

export const routes = [
    {
        path: "/",
        component: () => <Redirect to="/app" />,
        isPrivate: true,
        exact: true,
    },

    {
        path: "/app",
        component: DashboardRoutes,
        isPrivate: true,
        exact: false,
        routes: [
            {
                path: "/app/home",
                component: HomePage,
                isPrivate: true,
                exact: true,
            },

            {
                path: "/app/hero/:id",
                component: HeroeDetailPage,
                isPrivate: true,
                exact: true,
            },

            {
                path: "/app/search",
                component: SearchPage,
                isPrivate: true,
                exact: true,
            }
        ]

    },

    {
        path: "/login",
        component: SignInPage,
        isPrivate: false,
        exact: true,
    },

    {
        component: () => <Redirect to="/login" />,
    },
];