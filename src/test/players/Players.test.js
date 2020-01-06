import React from 'react';
import { shallow } from 'enzyme';
import Players from '../../players';
import Loading from '../../loading'

describe('Players Component', () => {

    let props, wrapper;

    beforeEach(() => {
        props = {
            isLoading: false,
            filteredPlayers: []
        };

        wrapper = shallow(<Players {...props} />);
    });

    it('should render the component and show results', () => {
        props.filteredPlayers = [
            {
                name: 'player1',
                position: 'position1',
                nationality: 'nationality1',
                age: 'age1'
            },
            {
                name: 'player2',
                position: 'position2',
                nationality: 'nationality2',
                age: 'age2'
            },
            {
                name: 'player3',
                position: 'position3',
                nationality: 'nationality3',
                age: 'age3'
            }
        ];
        wrapper = shallow(<Players {...props} />);

        expect(wrapper.find('tr').length).toBe(4); // 1 for titles, 3 for results
    });

    it('should render a no players found message', () => {
        expect(wrapper.find('.not_found').length).toBe(1);
        expect(wrapper.find('.not_found').text()).toEqual('No players found.');
    });

    it('should render the Loading component if isLoading prop is true', () => {
        props.isLoading = true;
        wrapper = shallow(<Players {...props} />);
        expect(wrapper.find(Loading).length).toBe(1);
    });
});