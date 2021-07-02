import React from 'react';
import NavBars from '../Shared/NavBars/NavBars';

const NoFound = () => {
    return (
        <>
        <NavBars />
        <div className="text-center w-50 m-auto ">
            <img className="img-fluid mt-5" src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg" alt="" />
        </div>
        </>
    );
};

export default NoFound;