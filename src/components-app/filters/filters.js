import React from 'react';
import './filters.css';

class Filters extends React.Component {

    render () {
        return (
            <div className="filters">
                <input type="text" />

                <select>
                    <option default>Position</option>
                </select>

                <input type="number" />
                
                <button>Search</button>
            </div>
        );
    }
}

export default Filters;