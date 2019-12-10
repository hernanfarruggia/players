export const GET_PLAYERS_SUCCESS = 'GET_PLAYERS_SUCCESS';
export const GET_PLAYERS_FAILURE = 'GET_PLAYERS_FAILURE';
export const FILTER = 'FILTER';

export const getPlayers = () => {
    return dispatch => {
        return fetch('https://football-players-b31f2.firebaseio.com/players.json?print=pretty')
            .then(res => res.json())
            .then(res => {
                const players = res.map(player => {
                    const { name, position, nationality, dateOfBirth } = player,
                        // Adding hh:mm resolves an issue with time and timezones
                        birthdate = new Date(dateOfBirth + ' 00:00'),
                        ageDiff = Date.now() - birthdate.getTime(),
                        ageDate = new Date(ageDiff),
                        age = Math.abs(ageDate.getUTCFullYear() - 1970);

                    return {
                        name,
                        position,
                        nationality,
                        age
                    };
                });

                dispatch(getPlayersSuccess(players));
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