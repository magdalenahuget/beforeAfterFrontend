import React from 'react';
import Header from '../Header';
import BottomNav from '../BottomNav';

const Favourites = () => {

    return (
        <>
            <Header/>
            <h1 style={{ marginTop: '10vh', textAlign: 'center' }}>Your favourite transformations:</h1>
            <BottomNav/>
        </>
    );
}

export default Favourites;