import React from 'react';

import Loading from '../../components-ui/loading';

import './players.css';

const Players = (props) => {

    const renderLoading = () => {
        return (
            <Loading /> 
        );
    }

    const renderPlayersTable = ()  => {
        return (
            <table className="players">
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Position</th>
                        <th>Nationality</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    { props.filteredPlayers.map(renderPlayers) }
                </tbody>
            </table>
        );
    }

    const renderPlayers = (player, key)  => {
        return (
            <tr key={ key }>
                <td>{ player.name }</td>
                <td>{ player.position }</td>
                <td>{ player.nationality }</td>
                <td>{ player.age }</td>
            </tr>
        );
    }

    return (
        <div>
            { props.isLoading ? renderLoading() : renderPlayersTable() }
        </div>
        
    );
}

export default Players;