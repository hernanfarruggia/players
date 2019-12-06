import React from 'react';

import Filters from '../filters';
import Players from '../players';

import './app.css';

const App = () => {

    return (
        <div className="wrapper">

            <header className="header">
                Football Players Finder
            </header>

            <div className="content">
                <Filters />

                <Players />
            </div>

        </div>
    );
}

export default App;
