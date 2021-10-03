import React from 'react';
import background from '../assets/background.jpeg'
import { FormLogin } from '../components/form/FormLogin';

export const SignInPage = () => {

    return (
        <div className="d-flex justify-content-center  align-items-center" style={{ minHeight: "100vh" }}>
            <div className="container w-75 bg-primary rounded shadow ">
                <div className="row align-items-stretch">
                    <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded g-0">
                        <img src={background} alt="img-login" width="100%" height="100%" className="mx-auto d-block" />
                    </div>

                    <div className="col bg-white p-5 rounded-end">
                        <h2 className="fw-bold text-center py-5">Welcome</h2>

                        <FormLogin />
                    </div>
                </div>
            </div>
        </div>
    )
}
