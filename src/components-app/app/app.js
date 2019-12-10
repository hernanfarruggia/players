import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    clear,
    filter,
    getPlayers
} from '../../redux/actions';

import Filters from '../filters';
import Players from '../players';

import './app.css';

class App extends Component {

    componentDidMount () {
        this.props.getPlayers();
    }

    handleFilter = (filters) => {
        this.props.applyFilters(filters);
    }

    handleClear = () => {
        this.props.clearFilters();
    }

    render () {

        return (
            <div className="wrapper">
    
                <header className="header">
                    Football Players Finder
                </header>
    
                <div className="content">
                    <Filters
                        filters={ this.props.filters }
                        handleClear={ this.handleClear }
                        handleFilter={ this.handleFilter }
                        positions={ this.props.positions } />
    
                    <Players
                        isLoading={ this.props.loading }
                        filteredPlayers={ this.props.filteredPlayers } />
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
        applyFilters: (filters) => dispatch(filter(filters)),
        clearFilters: (filters) => dispatch(clear()),
        getPlayers: () => dispatch(getPlayers())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
