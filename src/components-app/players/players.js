import React from 'react';
import { connect } from 'react-redux';

import {
    getPlayers
} from '../../redux/actions';

import './players.css';

class Players extends React.Component {

    componentDidMount () {
        this.props.getPlayers();
    }

    renderPlayers = player => {
        return (
            <tr>
                <td>{ player.name }</td>
                <td>{ player.position }</td>
                <td>{ player.nationality }</td>
                <td>{ player.age }</td>
            </tr>
        );
    }

    render () {
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
                    { this.props.filteredPlayers.map(this.renderPlayers) }
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => {
    return {
        filteredPlayers: state.filteredPlayers
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getPlayers: () => dispatch(getPlayers())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Players);