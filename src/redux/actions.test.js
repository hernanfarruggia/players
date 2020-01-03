
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store'

import * as actions from './actions'
import  { initialState } from './reducer'

const createStore = configureMockStore([thunk])
const store = createStore(initialState)

describe('Actions', () => {

    describe('loading', () => {

        it('should return a LOADING_START action', () => {
            const result = actions.loadingStart();
            expect(result).toEqual({
                type: 'LOADING_START'
            });
        });

        it('should return a LOADING_STOP action', () => {
            const result = actions.loadingStop();
            expect(result).toEqual({
                type: 'LOADING_STOP'
            });
        });
    });

    describe('players', () => {

        afterEach(() => {
            fetchMock.reset();
        });

        it('should fetch players when invoking getPlayers', () => {
            const response = [
                {
                    name: 'name1',
                    position: 'position1',
                    nationality: 'nationality1',
                    dateOfBirth: '12/25/1988'
                },
                {
                    name: 'name2',
                    position: 'position2',
                    nationality: 'nationality2',
                    dateOfBirth: '12/25/1988'
                }
            ];

            fetchMock.getOnce('https://football-players-b31f2.firebaseio.com/players.json?print=pretty', { body: response }, 200);

            store.dispatch(actions.getPlayers())
                .then(() => {
                    expect(store.getActions()).toEqual([
                        { type: 'LOADING_START' },
                        { type: 'GET_PLAYERS_SUCCESS', players: expect.any(Array) },
                        { type: 'LOADING_STOP' }
                    ]);
                })
                .then(store.clearActions);
        });

        it('should fail to fetch players and invoke error action', () => {
            fetchMock.getOnce('https://football-players-b31f2.firebaseio.com/players.json?print=pretty', { throws: 'error message', status: 404 });

            store.dispatch(actions.getPlayers())
                .then(() => {
                    expect(store.getActions()).toEqual([
                        { type: 'LOADING_START' },
                        { type: 'GET_PLAYERS_FAILURE', error: 'error message' },
                        { type: 'LOADING_STOP' }
                    ]);
                })
                .then(store.clearActions);
        });
    });

    describe('filters', () => {

        it('should return a CLEAR action', () => {
            const result = actions.clear();
            expect(result).toEqual({
                type: 'CLEAR'
            });
        });

        it('should return a FILTER action', () => {
            const result = actions.filter({ foo: 'bar'});
            expect(result).toEqual({
                type: 'FILTER',
                filters: { foo: 'bar'}
            });
        });
    });
});