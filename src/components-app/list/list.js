import React from 'react';
import './list.css';

const List = props => {

    const renderPlayers = player => {
        return (
            <tr>
                <td>{ player.name }</td>
                <td>{ player.position }</td>
                <td>{ player.nationality }</td>
                <td>{ player.dateOfBirth }</td>
            </tr>
        );
    }

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
                { props.players.map(renderPlayers) }
            </tbody>
        </table>
    );
}

export default List;