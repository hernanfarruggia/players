export const GET_PLAYERS = 'GET_PLAYERS';
export const GET_PLAYERS_SUCCESS = 'GET_PLAYERS_SUCCESS';
export const GET_PLAYERS_FAILURE = 'GET_PLAYERS_FAILURE';
export const FILTER = 'FILTER';

export function getPlayers () {
    return {
        type: GET_PLAYERS
    };
}

function getPlayersSuccess (players) {
    return {
        type: GET_PLAYERS_SUCCESS,
        players
    };
}

function getPlayersFailure (error) {
    return {
        type: GET_PLAYERS_FAILURE,
        error
    };
}

function filter (filter) {
    return {
        type: FILTER,
        filter
    };
}