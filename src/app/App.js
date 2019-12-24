import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPlayers } from '../redux/actions';

import Filters from '../filters';
import Players from '../players';

import './app.css';

class App extends Component {

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
    
                    <Players
                        isLoading={ this.props.loading }
                        filteredPlayers={ this.props.filteredPlayers } />
                </div>

            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
