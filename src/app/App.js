import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPlayers } from '../redux/actions';

import Filters from '../filters';
import Players from '../players';

import './app.css';

export class App extends Component {

    componentDidMount () {
        this.props.getPlayers();
    }

    renderError(error) {
        // Logging error for information purposes
        console.log(error);

        return (
            <div className="error">
                There's a connection issue, try reloading the page.
            </div>
        );
    }

    renderPlayers() {
        return (
            <div>
                <Filters />
    
                <Players
                    isLoading={ this.props.loading }
                    filteredPlayers={ this.props.filteredPlayers } />
            </div>
        );
    }

    renderContent() {
        return this.props.error ?
            this.renderError(this.props.error) :
            this.renderPlayers();
    }

    render () {

        return (
            <div className="app">
    
                <header className="header">
                    Football Players Finder
                </header>
    
                <div className="content">
                    { this.renderContent() }
                </div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        error: state.error,
        loading: state.loading,
        filteredPlayers: state.filteredPlayers
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getPlayers: () => dispatch(getPlayers())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
