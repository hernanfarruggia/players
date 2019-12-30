import React from 'react';

import Loading from '../loading';

import './players.css';

const Players = (props) => {

    const renderLoading = () => {
        return <Loading />;
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

    const renderNotFound = () => {
        return (
            <div className="not_found">
                No players found.
            </div>
        );
    }

    const renderComponent = () => {
        let render;

        if (props.isLoading) {
            render = renderLoading();
        } else {
            if (props.filteredPlayers.length > 0) {
                render = renderPlayersTable();
            } else {
                render = renderNotFound();
            }
        }

        return render;
    }

    return renderComponent();
}

export default Players;