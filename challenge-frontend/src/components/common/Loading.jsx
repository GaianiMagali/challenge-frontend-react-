import React from 'react';

export const Loading = () => {
    return (
        <div className="d-flex justify-content-center  align-items-center" style={{ minHeight: "100vh" }}>
            <div className="spinner-border w-100" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
