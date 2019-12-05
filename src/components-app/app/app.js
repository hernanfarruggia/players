import React from 'react';
import Filters from '../filters';
import List from '../list';

import './app.css';

function App() {
    return (
        <div className="wrapper">

            <header className="header">
                Football Players Finder
            </header>

            <div className="content">
                <Filters />

                <List />
            </div>

        </div>
    );
}

export default App;
