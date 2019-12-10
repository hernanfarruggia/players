import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    filter,
    getPlayers
} from '../../redux/actions';

import Filters from '../filters';
import Players from '../players';

import './app.css';

class App extends Component {

    constructor (props) {
        super(props);

        this.state = {
            filters: {
                name: this.props.filters.name,
                position: this.props.filters.position,
                age: this.props.filters.age
            }
        };
    }

    componentDidMount () {
        this.props.getPlayers();
    }

    handleFilter = (filters) => {
        this.props.applyFilter(filters);
    }

    render () {

        return (
            <div className="wrapper">
    
                <header className="header">
                    Football Players Finder
                </header>
    
                <div className="content">
                    <Filters
                        filters={ this.state.filters }
                        handleFilter={ this.handleFilter }
                        positions={ this.props.positions } />
    
                    <Players 
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
        applyFilter: (filters) => dispatch(filter(filters)),
        getPlayers: () => dispatch(getPlayers())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
