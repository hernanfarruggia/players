export const GET_PLAYERS_SUCCESS = 'GET_PLAYERS_SUCCESS';
export const GET_PLAYERS_FAILURE = 'GET_PLAYERS_FAILURE';
export const FILTER = 'FILTER';

export const getPlayers = () => {
    return dispatch => {
        return fetch('https://football-players-b31f2.firebaseio.com/players.json?print=pretty')
            .then(res => res.json())
            .then(res => {
                dispatch(getPlayersSuccess(res))
            })
            .catch(error => dispatch(getPlayersFailure(error)));
    };
}

const getPlayersSuccess = players => {
    return {
        type: GET_PLAYERS_SUCCESS,
        players
    };
}

const getPlayersFailure = error => {
    return {
        type: GET_PLAYERS_FAILURE,
        error
    };
}

export const filter = filters => {
    return {
        type: FILTER,
        filters
    };
}