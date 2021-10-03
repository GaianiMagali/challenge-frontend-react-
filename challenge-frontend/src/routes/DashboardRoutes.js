import React, { useEffect } from 'react';
import { Navbar } from '../components/common/Navbar';
import { AppRouter } from './AppRouter';

export const DashboardRoutes = ({history, routes}) => {

    useEffect(() => {
       history.push('/app/home')
    }, []);

    return (
        <>
            <Navbar />

            <div className="mb-5">

                <AppRouter routes={routes} />

            </div>
        </>
    )
}
