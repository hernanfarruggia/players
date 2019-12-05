import React from 'react';
import './list.css';

function List () {
    return (
        <table className="list">
            <thead>
                <tr>
                <th>Player</th>
                <th>Position</th>
                <th>Nationality</th>
                <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Hernan</td>
                <td>Midfield</td>
                <td>Argentina</td>
                <td>30</td>
                </tr>
            </tbody>
        </table>
    );
}

export default List;