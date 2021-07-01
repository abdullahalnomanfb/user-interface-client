import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBars from '../../Shared/NavBars/NavBars';
import Users from '../Users/Users';


const Home = () => {
    return (
        <>
            <NavBars />
            <Users />
            <Footer />

        </>
    );
};

export default Home;