import React from 'react';
import { connect } from 'react-redux';

import {
    getPlayers
} from '../../redux/actions';

import Filters from '../filters';
import List from '../list';

import './app.css';

class App extends React.Component {

    componentDidMount () {
        this.props.getPlayers();
    }

    render () {
        return (
            <div className="wrapper">

                <header className="header">
                    Football Players Finder
                </header>

                <div className="content">
                    <Filters />

                    <List players={ this.props.filteredPlayers }/>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        getPlayers: () => dispatch(getPlayers())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
