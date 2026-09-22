import React, { useState } from 'react';
import { Footer } from './components/Footer';
import Routers from './router';


const App: React.FC = () => {
    return (
        <>
            <Routers />
            <Footer />
        </>


    );
};

export default App;
